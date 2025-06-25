const { Schema, model } = require("mongoose");
const { Category } = require("./categorySchema");
const { Disconnect } = require("./discountSchema");

const productSchema = new Schema({
  name: { type: String, required: true, trim: true, unique: true },
  description: { type: String, required: true },
  photo: { type: String, required: true },
  price: { type: String, required: true },
  count: { type: String, required: true },
  category_id: { type: Schema.Types.ObjectId, ref: Category },
  discount_id: { type: Schema.Types.ObjectId, ref: Disconnect },
});

const Product = model("Product", productSchema);
module.exports = { Product };
