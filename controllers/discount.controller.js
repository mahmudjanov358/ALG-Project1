const { Discount } = require("../models/discountSchema");

// ----postDiscount
exports.postDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Discount yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getDiscount
exports.getDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Discountlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getDiscountById
exports.getDiscountById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Discount ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateDiscount
exports.updateDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Discountni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteDiscount
exports.deleteDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Discountni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
