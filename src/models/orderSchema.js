const { Schema, model } = require("mongoose");
module.exports = model(
  "order",
  new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: "product", required: true },
    order_details_id: {
      type: Schema.Types.ObjectId,
      ref: "order_details",
      required: true,
    },
  })
); // ----orderSchema
