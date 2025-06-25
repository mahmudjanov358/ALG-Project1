const { CartItem } = require("../models/cartItemSchema"); // ----CartItem Model

exports.postCartItem = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating CartItem — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getCartItem = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving CartItem list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getCartItemById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for CartItem id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted CartItem — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
