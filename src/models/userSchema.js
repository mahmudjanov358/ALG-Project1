const { Schema, model } = require("mongoose");
module.exports = model(
  "user",
  new Schema({
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true, unique: true },
    email: { type: String, required: true, trim: true, unique: true },
    address: { type: String, required: true, trim: true },
    photo: { type: String, required: true },
  })
); // ----userSchema
