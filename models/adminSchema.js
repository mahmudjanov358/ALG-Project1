const { Schema, model } = require("mongoose");
module.exports = model(
  "Admin",
  new Schema({
    name: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    is_active: { type: Boolean },
  })
); // ----adminSchema
