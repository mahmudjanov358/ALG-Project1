const { Schema, model } = require("mongoose"); // ----Mongoose
const { Payment } = require("./paymentSchema"); // ----Payment
const { User } = require("./userSchema"); // ----User

const order_detailsSchema = new Schema({
  payment_id: { type: Schema.Types.ObjectId, ref: Payment, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  total: { type: BigInt, required: true },
}); // ----order_detailsSchema

const Order_Details = model("Order_Details", order_detailsSchema); // ----Order_Details
module.exports = { Order_Details }; // ----Order_Details
