const { Schema, model } = require("mongoose");
const { Product } = require("./productSchema");
const { OrderD } = require("./orderDSchema");

const orderSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  order_details_id: { type: Schema.Types.ObjectId, ref: OrderD },
});

const Order = model("Order", orderSchema);
module.exports = { Order };
