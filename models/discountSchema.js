const { Schema, model } = require("mongoose"); // ----Mongoose

const discountSchema = new Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  percent: { type: BigInt, required: true },
}); // ----discountSchema

const Discount = model("Discount", discountSchema); // ----Discount
module.exports = { Discount }; // ----Discount
