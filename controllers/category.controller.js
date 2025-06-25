const { Category } = require("../models/categorySchema"); // ----Category Model

exports.postCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Category — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Category list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Category id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Category — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Category — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
