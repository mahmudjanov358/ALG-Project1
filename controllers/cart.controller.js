const { Cart } = require("../models/cartSchema"); // ----Cart Model

exports.postCart = async (req, res) => {
  try {
    const { user_id, status_id } = req.body;
    const newCart = await Cart({
      user_id,
      status_id,
    });
    await newCart.save();
    return res.status(200).json({
      success: true,
      message: "Cart created successfully!",
    });
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
    const cartId = req.params.id;
    const cart = await Cart.findById(cartId);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart found!",
        cart: cart,
      });
    }
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
    const cartId = req.params.id;
    const deletedCart = await Cart.findByIdAndDelete(cartId);

    if (!deletedCart) {
      return res.status(404).json({
        success: false,
        message: "Cart not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteCart
