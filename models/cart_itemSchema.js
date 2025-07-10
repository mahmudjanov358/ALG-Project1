const { Schema, model } = require("mongoose"); // ----Mongoose
const { Cart } = require("./cartSchema"); // ----Cart
const { Product } = require("./productSchema"); // ----Product

const cart_itemSchema = new Schema({
  cart_id: { type: Schema.Types.ObjectId, ref: Cart, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
}); // ----cart_itemSchema

const Cart_Item = model("Cart_Item", cart_itemSchema); // ----Cart_Item
module.exports = { Cart_Item }; // ----Cart_Item
