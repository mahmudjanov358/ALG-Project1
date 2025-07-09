const { Category } = require("../models/categorySchema");

// ----postCategory
exports.postCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Category yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCategory
exports.getCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Categorylar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCategoryById
exports.getCategoryById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Category ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateCategory
exports.updateCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Categoryni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteCategory
exports.deleteCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Categoryni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
