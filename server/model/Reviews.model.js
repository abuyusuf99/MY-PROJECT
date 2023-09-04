const mongoose = require("mongoose");

const reviewsSchema = mongoose.Schema({
  text: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  productId:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product"
  }
});
const Reviews = mongoose.model("Reviews", reviewsSchema);

module.exports = Reviews;
