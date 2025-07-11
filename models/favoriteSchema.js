const { Schema, model } = require("mongoose");
module.exports = model(
  "Favorite",
  new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    product_id: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  })
); // ----favoriteSchema
