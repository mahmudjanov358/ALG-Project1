const { Schema, model } = require("mongoose"); // ----Mongoose

const paymentSchema = new Schema({
  name: { type: String, required: true, trim: true },
}); // ----paymentSchema

const Payment = model("Payment", paymentSchema); // ----Payment
module.exports = { Payment }; // ----Payment
