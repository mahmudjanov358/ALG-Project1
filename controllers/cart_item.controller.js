const { Cart_Item } = require("../models/cart_itemSchema");

// ----postCart_Item
exports.postCart_Item = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cart_Item yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCart_Item
exports.getCart_Item = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cart_Itemlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCart_ItemById
exports.getCart_ItemById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cart_Item ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteCart_Item
exports.deleteCart_Item = async (req, res) => {
  try {
  } catch (error) {
    console.error("Cart_Itemni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
