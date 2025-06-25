const { Schema, model } = require("mongoose");
const { Cart } = require("./cartSchema");
const { Product } = require("./productSchema");

const cartItemSchema = new Schema({
  cart_id: { type: Schema.Types.ObjectId, ref: Cart },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
});

const CartItem = model("CartItem", cartItemSchema);
module.exports = { CartItem };
