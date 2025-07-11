const { Schema, model } = require("mongoose");
module.exports = model(
  "Discount",
  new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    percent: { type: Number, required: true },
  })
); // ----discountSchema
