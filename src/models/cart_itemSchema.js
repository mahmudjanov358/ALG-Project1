const { Schema, model } = require("mongoose");
module.exports = model(
  "cart_item",
  new Schema({
    cart_id: { type: Schema.Types.ObjectId, ref: "cart", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "product", required: true },
  })
); // ----cart_itemSchema
