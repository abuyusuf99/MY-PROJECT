const User = require("../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userControllers = {
  createUser: async (req, res) => {
    const { login, password, cart } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    try {
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res.status(401).json("такой уже есть");
      }
      const data = await User.create({
        login: login,
        password: hash,
        cart: cart,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  patchUser: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const data = await User.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await User.findById();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (!candidate) {
        return res.status(401).json("Неверный логин");
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res.status(401).json("неверный пароль");
      }
      const payload = {
        id: candidate._id,
        login: candidate.login,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });
      res.json(token);
    } catch (error) {
      res.json(error.message);
    }
  },
};
