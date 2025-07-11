const { Schema, model } = require("mongoose");
module.exports = model(
  "Order_Details",
  new Schema({
    payment_id: { type: Schema.Types.ObjectId, ref: "Payment", required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    total: { type: Number, required: true },
  })
); // ----order_detailsSchema
