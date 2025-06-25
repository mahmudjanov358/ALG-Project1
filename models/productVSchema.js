const { Schema, model } = require("mongoose");
const { Product } = require("./productSchema");

const productVSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
  price: { type: BigInt, required: true },
  color: { type: String, required: true },
});

const ProductV = model("ProductV", productVSchema);
module.exports = { ProductV };
