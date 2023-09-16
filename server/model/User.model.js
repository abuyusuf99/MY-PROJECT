const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  login: String,
  password: String,
  name: String,
  lastname: String,
  phone: Number,
  mail: String,
  cart: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
  }],
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
