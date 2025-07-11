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
  "Product_Variant",
  new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: "Product" },
    price: { type: Number, required: true },
    color: {
      type: String,
      required: true,
      trim: true,
      enum: colors,
    },
  })
); // ----product_variantSchema
