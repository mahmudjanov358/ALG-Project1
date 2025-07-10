const { Schema, model } = require("mongoose"); // ----Mongoose
const { User } = require("./userSchema"); // ----User
const { Product } = require("./productSchema"); // ----Product

const product_commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  comment: { type: String, required: true },
}); // ----product_commentSchema

const Product_Comment = model("Product_Comment", product_commentSchema); // ----Product_Comment
module.exports = { Product_Comment }; // ----Product_Comment
