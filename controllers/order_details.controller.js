const { Order_Details } = require("../models/order_detailsSchema");

// ----postOrder_Details
exports.postOrder_Details = async (req, res) => {
  try {
  } catch (error) {
    console.error("Order_Details yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrder_Details
exports.getOrder_Details = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Order_Detailslar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrder_DetailsById
exports.getOrder_DetailsById = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Order_Details ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateOrder_Details
exports.updateOrder_Details = async (req, res) => {
  try {
  } catch (error) {
    console.error("Order_Detailsni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteOrder_Details
exports.deleteOrder_Details = async (req, res) => {
  try {
  } catch (error) {
    console.error("Order_Detailsni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
