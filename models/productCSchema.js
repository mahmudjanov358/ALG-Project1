const { Schema, model } = require("mongoose");
const { User } = require("./userSchema");
const { Product } = require("./productSchema");

const productCSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  comment: { type: String, required: true },
});

const ProductC = model("ProductC", productCSchema);
module.exports = { ProductC };
