const { Product_Comment } = require("../models/product_commentSchema");

// ----postProduct_Comment
exports.postProduct_Comment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product_Comment yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_Comment
exports.getProduct_Comment = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Commentlar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_CommentById
exports.getProduct_CommentById = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Comment ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct_Comment
exports.updateProduct_Comment = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Commentni o'zgartirishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct_Comment
exports.deleteProduct_Comment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product_Commentni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
