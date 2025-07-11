const { Schema, model } = require("mongoose");
module.exports = model(
  "Product_Comment",
  new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User" },
    product_id: { type: Schema.Types.ObjectId, ref: "Product" },
    comment: { type: String, required: true, trim: true },
  })
); // ----product_commentSchema
