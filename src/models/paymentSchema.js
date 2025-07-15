const { Schema, model } = require("mongoose");
const payment_options = [
  "Naqd",
  "Karta",
  "Click",
  "Payme",
  "UzCard",
  "Humo",
  "Apelsin",
  "Bank_O'tkazma",
  "Paypal",
  "Visa",
  "MasterCard",
  "Unionpay",
  "Cryptocurrency",
  "WebMoney",
  "Qiwi",
  "Yandex_Money",
];
module.exports = model(
  "payment",
  new Schema({
    name: { type: String, required: true, trim: true, enum: payment_options },
  })
); // ----paymentSchema
