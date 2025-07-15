const { Schema, model } = require("mongoose");
const statuses = ["active", "inactive", "pending", "delivered", "cancelled"];
module.exports = model(
  "status",
  new Schema({
    status: { type: String, required: true, trim: true, enum: statuses },
  })
); // ----statusSchema
