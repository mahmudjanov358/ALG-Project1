const { Schema, model } = require("mongoose"); // ----Mongoose
const { Product } = require("./productSchema"); // ----Product

const product_variantSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  price: { type: BigInt, required: true },
  color: { type: String, required: true },
}); // ----product_variantSchema

const Product_Variant = model("Product_Variant", product_variantSchema); // ----Product_Variant
module.exports = { Product_Variant }; // ----Product_Variant
