const { Schema, model } = require("mongoose");
const { Payment } = require("./paymentSchema");
const { User } = require("./userSchema");

const order_detailsSchema = new Schema({
  payment_id: { type: Schema.Types.ObjectId, ref: Payment, required: true },
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  total: { type: BigInt, required: true },
});

const Order_Details = model("Order_Details", order_detailsSchema);
module.exports = { Order_Details };
