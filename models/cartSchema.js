const { Schema, model } = require("mongoose");
const { User } = require("./userSchema");
const { Status } = require("./statusSchema");

const cartSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  status_id: { type: Schema.Types.ObjectId, ref: Status },
});

const Cart = model("Cart", cartSchema);
module.exports = { Cart };
