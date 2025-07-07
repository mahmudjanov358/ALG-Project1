const { Schema, model } = require("mongoose");
const { Product } = require("./productSchema");
const { User } = require("./userSchema");

const product_reviewsSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  reviwe_text: { type: String, required: true },
  rating: { type: BigInt, required: true },
});

const Product_Reviews = model("Product_Reviews", product_reviewsSchema);
module.exports = { Product_Reviews };
