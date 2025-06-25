const { Schema, model } = require("mongoose");
const { Product } = require("./productSchema");
const { User } = require("./userSchema");

const productRSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  user_id: { type: Schema.Types.ObjectId, ref: User },
  reviews_text: { type: String, required: true },
  rating: { type: BigInt },
});

const ProductR = model("ProductR", productRSchema);
module.exports = { ProductR };
