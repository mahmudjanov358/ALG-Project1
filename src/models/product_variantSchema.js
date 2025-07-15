const { Schema, model } = require("mongoose");
const colors = [
  "White",
  "Black",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Gray",
  "Brown",
  "Pink",
  "Orange",
  "Gold",
  "Silver",
  "Bronze",
  "Beige",
  "Navy Blue",
  "Maroon",
  "Teal",
];
module.exports = model(
  "product_variant",
  new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: "product" },
    price: { type: Number, required: true },
    color: {
      type: String,
      trim: true,
      enum: colors,
    },
  })
); // ----product_variantSchema
