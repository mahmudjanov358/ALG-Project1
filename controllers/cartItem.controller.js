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
}; // ----postCartItem

exports.getCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.find({});
    return res.status(200).json({
      success: true,
      message: "CartItem list!",
      cartItems: cartItem,
    });
  } catch (error) {
    console.error("Error retrieving CartItem list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getCartItem

exports.getCartItemById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for CartItem id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getCartItemById

exports.deleteCartItem = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted CartItem — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteCartItem
