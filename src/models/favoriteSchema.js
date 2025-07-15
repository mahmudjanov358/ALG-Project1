const { Schema, model } = require("mongoose");
module.exports = model(
  "favorite",
  new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "user", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "product", required: true },
  })
); // ----favoriteSchema
