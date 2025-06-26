const { Order } = require("../models/orderSchema"); // ----Order Model

exports.postOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postOrder

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.find({});
    return res.status(200).json({
      success: true,
      message: "Order list!",
      orders: order,
    });
  } catch (error) {
    console.error("Error retrieving Order list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrder

exports.getOrderById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Order id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrderById

exports.deleteOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteOrder
