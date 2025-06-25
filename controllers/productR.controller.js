const { ProductR } = require("../models/productRSchema"); // ----ProductR Model

exports.postProductR = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating ProductR — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductR = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving ProductR list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductRById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for ProductR id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateProductR = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated ProductR — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteProductR = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted ProductR — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
