const { Schema, model } = require("mongoose");
const { Payment } = require("./paymentSchema");
const { User } = require("./userSchema");

const orderDSchema = new Schema({
  payment_id: { type: Schema.Types.ObjectId, ref: Payment },
  user_id: { type: Schema.Types.ObjectId, ref: User },
  total: { type: BigInt, required: true },
});

const OrderD = model("OrderD", orderDSchema);
module.exports = { OrderD };
