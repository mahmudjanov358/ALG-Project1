const { Schema, model } = require("mongoose"); // ----Mongoose
module.exports = model(
  "product",
  new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    category_id: {
      type: Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    discount_id: {
      type: Schema.Types.ObjectId,
      ref: "discount",
      required: true,
    },
  })
); // ----productSchema
