const { Schema, model } = require("mongoose");
const { Product } = require("./productSchema");

const product_variantSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  price: { type: BigInt, required: true },
  color: { type: String, required: true },
});

const Product_Variant = model("Product_Variant", product_variantSchema);
module.exports = { Product_Variant };
