const { Schema, model } = require("mongoose");
const { Category } = require("./categorySchema");
const { Discount } = require("./discountSchema");

const productSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: String, required: true },
  count: { type: String, required: true },
  category_id: { type: Schema.Types.ObjectId, ref: Category, required: true },
  discount_id: { type: Schema.Types.ObjectId, ref: Discount, required: true },
});

const Product = model("Product", productSchema);
module.exports = { Product };
