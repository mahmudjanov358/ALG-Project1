const { Schema, model } = require("mongoose");
module.exports = model(
  "Cart_Item",
  new Schema({
    cart_id: { type: Schema.Types.ObjectId, ref: "Cart", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  })
); // ----cart_itemSchema
