const User = require("../model/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userControllers = {
  createUser: async (req, res) => {
    const { login, password,name,lastname,phone,mail, cart, } = req.body;
    const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS));

    try {
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res.status(401).json("такой уже есть");
      }
      const data = await User.create({
        login: login,
        password: hash,
        name:name,
        lastname:lastname,
        phone:phone,
        mail:mail,
        cart: cart,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  //Изменение данных пользователя
  patchUser: async (req, res) => {
    const{
      login,
      password,
      name,
      lastname,
      phone,
      mail,

    } = req.body
    const userId = req.user.id
    try {
      //Найти ппользователя по ID
      const user = await User.findById(userId)
      const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUNDS))


      //Изменение данных
      user.login = login || user.login
      user.name = name || user.name
      user.password = password !== "" ? hash: user.password
      user.lastname = lastname || user.lastname
      user.phone = phone || user.phone
      user.mail = mail || user.mail
      
await user.save()
res.json(user)
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
   
      const data = await User.findById(req.user.id);
      res.json(data);
    
    
   
  },getProductCart: async(req,res)=>{
    try {
        const data = await User.find({}).populate('Product')
    
        res.json(data)
    } catch (error) {
        res.json(error)
    }
        },


  login: async (req, res) => {
    try {
      const { login, password } = req.body;
      const candidate = await User.findOne({ login });
      if (!candidate) {
        return res.status(401).json({error:"Неверный логин или пароль!"});
      }
      const valid = await bcrypt.compare(password, candidate.password);
      if (!valid) {
        return res.status(401).json({error:"неверный пароль"});
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
