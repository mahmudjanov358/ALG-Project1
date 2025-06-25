const { ProductV } = require("../models/productVSchema"); // ----ProductV Model

exports.postProductV = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating ProductV — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductV = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving ProductV list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getProductVById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for ProductV id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateProductV = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated ProductV — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteProductV = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted ProductV — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
