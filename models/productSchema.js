const { Schema, model } = require("mongoose"); // ----Mongoose
const { Category } = require("./categorySchema"); // ----Category
const { Discount } = require("./discountSchema"); // ----Discount

const productSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: String, required: true },
  count: { type: String, required: true },
  category_id: { type: Schema.Types.ObjectId, ref: Category, required: true },
  discount_id: { type: Schema.Types.ObjectId, ref: Discount, required: true },
}); // ----productSchema

const Product = model("Product", productSchema); // ----Product
module.exports = { Product }; // ----Product
