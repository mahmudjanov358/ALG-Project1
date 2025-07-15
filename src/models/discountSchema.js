const { Schema, model } = require("mongoose");
module.exports = model(
  "discount",
  new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    percent: { type: Number, required: true },
  })
); // ----discountSchema
