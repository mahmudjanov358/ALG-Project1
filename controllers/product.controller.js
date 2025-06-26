const { Product } = require("../models/productSchema"); // ----Product Model

exports.postProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Product — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postProduct

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json({
      success: true,
      message: "Product list!",
      products: product,
    });
  } catch (error) {
    console.error("Error retrieving Product list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProduct

exports.getProductById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Product id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductById

exports.updateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Product — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateProduct

exports.deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Product — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteProduct
