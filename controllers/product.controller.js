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
};

exports.getProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Product list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Product id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Product — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Product — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
