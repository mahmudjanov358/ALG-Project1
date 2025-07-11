const { Schema, model } = require("mongoose");
module.exports = model(
  "cart",
  new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "user", required: true },
    status_id: { type: Schema.Types.ObjectId, ref: "status", required: true },
  })
); // ----cartSchema
