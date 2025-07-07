const { Schema, model } = require("mongoose");
const { Product } = require("./productSchema");
const { Order_Details } = require("./order_detailsSchema");

const orderSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
  order_details_id: {
    type: Schema.Types.ObjectId,
    ref: Order_Details,
    required: true,
  },
});

const Order = model("Order", orderSchema);
module.exports = { Order };
