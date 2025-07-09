const { Cart } = require("../models/cartSchema");

// ----postCart
exports.postCart = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cart yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCart
exports.getCart = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cartlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCartById
exports.getCartById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cart ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteCart
exports.deleteCart = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cartni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
