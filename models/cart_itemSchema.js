const { Schema, model } = require("mongoose");
const { Cart } = require("./cartSchema");
const { Product } = require("./productSchema");

const cart_itemSchema = new Schema({
  cart_id: { type: Schema.Types.ObjectId, ref: Cart, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
});

const Cart_Item = model("Cart_Item", cart_itemSchema);
module.exports = { Cart_Item };
