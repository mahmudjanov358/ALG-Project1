const { Schema, model } = require("mongoose");
module.exports = model(
  "order_details",
  new Schema({
    payment_id: { type: Schema.Types.ObjectId, ref: "payment", required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "user", required: true },
    total: { type: Number, required: true },
  })
); // ----order_detailsSchema
