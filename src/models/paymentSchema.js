const { Schema, model } = require("mongoose");
module.exports = model(
  "payment",
  new Schema({
    name: { type: String, required: true, trim: true },
  })
); // ----paymentSchema
