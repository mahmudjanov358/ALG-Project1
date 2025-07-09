const { Product } = require("../models/productSchema");

// ----postProduct
exports.postProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct
exports.getProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Productlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProductById
exports.getProductById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct
exports.updateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Productni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct
exports.deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Productni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
