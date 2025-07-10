const { Cart } = require("../models/cartSchema"); // ----Cart

// ----postCart
exports.postCart = async (req, res) => {
  try {
    const { user_id, status_id } = req.body;
    const newCart = new Cart({
      user_id,
      status_id,
    });
    await newCart.save();
    return res.status(200).json({
      success: true,
      message: "Cart muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Cart yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCart
exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    return res.status(200).json({
      success: true,
      message: "Cartlar ro'yhati!",
      carts: cart,
    });
  } catch (error) {
    console.error("Cartlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCartById
exports.getCartById = async (req, res) => {
  try {
    const cartId = req.params.id;
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart ma'lumotlari!",
        cart: cart,
      });
    }
  } catch (error) {
    console.error("Cart ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteCart
exports.deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const cart = await Cart.findByIdAndDelete(cartId);
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: "Cart topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Cartni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
