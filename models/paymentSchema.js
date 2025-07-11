const { Schema, model } = require("mongoose");
module.exports = model(
  "Payment",
  new Schema({
    name: { type: String, required: true, trim: true },
  })
); // ----paymentSchema
