const { Schema, model } = require("mongoose");
module.exports = model(
  "Product_Reviews",
  new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    review_text: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  })
); // ----product_reviewsSchema
