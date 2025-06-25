const { ProductC } = require("../models/productCSchema"); // ----ProductC Model

exports.postProductC = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating ProductC — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductC = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving ProductC list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductCById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for ProductC id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateProductC = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated ProductC — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteProductC = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted ProductC — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
