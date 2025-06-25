const { Schema, model } = require("mongoose"); // ----Mongoose Library

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  photo: { type: String },
}); // ----userSchema

const User = model("User", userSchema); // ----Exporting User Schema
module.exports = { User };
