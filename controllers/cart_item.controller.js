const { Cart_Item } = require("../models/cart_itemSchema");

// ----postCart_Item
exports.postCart_Item = async (req, res) => {
  try {
    const { cart_id, product_id } = req.body;
    const newCart_Item = new Cart_Item({
      cart_id,
      product_id,
    });
    await newCart_Item.save();
    return res.status(200).json({
      success: true,
      message: "Cart_Item muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Cart_Item yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCart_Item
exports.getCart_Item = async (req, res) => {
  try {
    const cart_item = await Cart_Item.find({});
    return res.status(200).json({
      success: true,
      message: "Cart_Itemlar ro'yhati!",
      cart_items: cart_item,
    });
  } catch (error) {
    console.error("Cart_Itemlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCart_ItemById
exports.getCart_ItemById = async (req, res) => {
  try {
    const cart_itemId = req.params.id;
    const cart_item = await Cart_Item.findById(cart_itemId).populate(
      "cart_id product_id"
    );

    if (!cart_item) {
      return res.status(404).json({
        success: false,
        message: "Cart_Item topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart_Item ma'lumotlari!",
        cart_item: cart_item,
      });
    }
  } catch (error) {
    console.error("Cart_Item ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteCart_Item
exports.deleteCart_Item = async (req, res) => {
  try {
    const cart_itemId = req.params.id;
    const cart_item = await Cart_Item.findByIdAndDelete(cart_itemId);

    if (!cart_item) {
      return res.status(404).json({
        success: false,
        message: "Cart_Item topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Cart_Item muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Cart_Itemni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
