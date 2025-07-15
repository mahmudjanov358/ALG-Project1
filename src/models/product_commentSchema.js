const { Schema, model } = require("mongoose");
module.exports = model(
  "product_comment",
  new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "user", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "product", required: true },
    comment: { type: String, required: true, trim: true },
  })
); // ----product_commentSchema
