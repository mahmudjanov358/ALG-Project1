const { Schema, model } = require("mongoose");
module.exports = model(
  "product_reviews",
  new Schema({
    product_id: { type: Schema.Types.ObjectId, ref: "product", required: true },
    user_id: { type: Schema.Types.ObjectId, ref: "user", required: true },
    review_text: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  })
); // ----product_reviewsSchema
