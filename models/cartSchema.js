const { Schema, model } = require("mongoose");
module.exports = model(
  "Cart",
  new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status_id: { type: Schema.Types.ObjectId, ref: "Status", required: true },
  })
); // ----cartSchema
