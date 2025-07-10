const { Schema, model } = require("mongoose"); // ----Mongoose
const { User } = require("./userSchema"); // ----User
const { Status } = require("./statusSchema"); // ----Status

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  status_id: { type: Schema.Types.ObjectId, ref: Status, required: true },
}); // ----cartSchema

const Cart = model("Cart", cartSchema); // ----Cart
module.exports = { Cart }; // ----Cart
