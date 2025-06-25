const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  is_Active: { type: Boolean },
});

const Admin = model("Admin", adminSchema);
module.exports = { Admin };
