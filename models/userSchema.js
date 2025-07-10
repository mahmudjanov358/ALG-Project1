const { Schema, model } = require("mongoose"); // ----Mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  name: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  photo: { type: String, required: true },
}); // ----userSchema

const User = model("User", userSchema); // ----User
module.exports = { User }; // ----User
