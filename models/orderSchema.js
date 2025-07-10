const { Schema, model } = require("mongoose"); // ----Mongoose
const { Product } = require("./productSchema"); // ----Product
const { Order_Details } = require("./order_detailsSchema"); // ----Order_Details

const orderSchema = new Schema({
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
  order_details_id: {
    type: Schema.Types.ObjectId,
    ref: Order_Details,
    required: true,
  },
}); // ----orderSchema

const Order = model("Order", orderSchema); // ----Order
module.exports = { Order }; // ----Order
