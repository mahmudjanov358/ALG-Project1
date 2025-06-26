const { Cart } = require("../models/cartSchema"); // ----Cart Model

exports.postCart = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Cart — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postCart

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({});
    return res.status(200).json({
      success: true,
      message: "Cart list!",
      carts: cart,
    });
  } catch (error) {
    console.error("Error retrieving Cart list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getCart

exports.getCartById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Cart id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getCartById

exports.deleteCart = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteCart
