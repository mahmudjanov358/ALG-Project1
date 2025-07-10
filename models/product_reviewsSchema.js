const { Schema, model } = require("mongoose"); // ----Mongoose
const { Product } = require("./productSchema"); // ----Product
const { User } = require("./userSchema"); // ----User

const product_reviewsSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  reviwe_text: { type: String, required: true },
  rating: { type: BigInt, required: true },
}); // ----product_reviewsSchema

const Product_Reviews = model("Product_Reviews", product_reviewsSchema); // ----Product_Reviews
module.exports = { Product_Reviews }; // ----Product_Reviews
