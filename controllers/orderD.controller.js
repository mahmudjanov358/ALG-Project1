const { OrderD } = require("../models/orderDSchema"); // ----OrderD Model

exports.postOrderD = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating OrderD — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postOrderD

exports.getOrderD = async (req, res) => {
  try {
    const orderD = await OrderD.find({});
    return res.status(200).json({
      success: true,
      message: "OrderD list!",
      orderDs: orderD,
    });
  } catch (error) {
    console.error("Error retrieving OrderD list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrderD

exports.getOrderDById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for OrderD id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrderDById

exports.updateOrderD = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated OrderD — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateOrderD

exports.deleteOrderD = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted OrderD — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteOrderD
