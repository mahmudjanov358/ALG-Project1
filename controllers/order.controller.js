const { Order } = require("../models/orderSchema");

// ----postOrder
exports.postOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Order yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrder
exports.getOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Orderlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrderById
exports.getOrderById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Order ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteOrder
exports.deleteOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Orderni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
