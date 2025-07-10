const { Order } = require("../models/orderSchema"); // ----Order

// ----postOrder
exports.postOrder = async (req, res) => {
  try {
    const { product_id, order_details_id } = req.body;
    const newOrder = new Order({
      product_id,
      order_details_id,
    });
    await newOrder.save();
    return res.status(200).json({
      success: true,
      message: "Order muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Order yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrder
exports.getOrder = async (req, res) => {
  try {
    const order = await Order.find({});
    return res.status(200).json({
      success: true,
      message: "Orderlar ro'yhati!",
      orders: order,
    });
  } catch (error) {
    console.error("Orderlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrderById
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order ma'lumotlari!",
      });
    }
  } catch (error) {
    console.error("Order ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteOrder
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Orderni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
