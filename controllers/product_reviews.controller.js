const { Product_Reviews } = require("../models/product_reviewsSchema");

// ----postProduct_Reviews
exports.postProduct_Reviews = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product_Reviews yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_Reviews
exports.getProduct_Reviews = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Reviewslar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_ReviewsById
exports.getProduct_ReviewsById = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Reviews ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct_Reviews
exports.updateProduct_Reviews = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Reviewsni o'zgartirishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct_Reviews
exports.deleteProduct_Reviews = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product_Reviewsni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
