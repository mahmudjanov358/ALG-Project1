const { Product_Variant } = require("../models/product_variantSchema");

// ----postProduct_Variant
exports.postProduct_Variant = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product_Variant yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_Variant
exports.getProduct_Variant = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Variantlar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_VariantById
exports.getProduct_VariantById = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Variant ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct_Variant
exports.updateProduct_Variant = async (req, res) => {
  try {
  } catch (error) {
    console.error(
      "Product_Variantni o'zgartirishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct_Variant
exports.deleteProduct_Variant = async (req, res) => {
  try {
  } catch (error) {
    console.error("Product_Variantni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
