const { Schema, model } = require("mongoose");

const discountSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  percent: { type: BigInt, required: true },
});

const Discount = model("Discount", discountSchema);
module.exports = { Discount };
