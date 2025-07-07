const { Schema, model } = require("mongoose");

const paymentSchema = new Schema({
  name: { type: String, required: true, trim: true },
});

const Payment = model("Payment", paymentSchema);
module.exports = { Payment };
