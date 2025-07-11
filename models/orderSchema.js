const { Schema, model } = require("mongoose");
module.exports = model(
  "Order",
  new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    order_details_id: {
      type: Schema.Types.ObjectId,
      ref: "Order_Details",
      required: true,
    },
  })
); // ----orderSchema
