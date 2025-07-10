const { Order_Details } = require("../models/order_detailsSchema"); // ----Order_Details

// ----postOrder_Details
exports.postOrder_Details = async (req, res) => {
  try {
    const { payment_id, user_id, total } = req.body;
    const newOrder_Details = new Order_Details({
      payment_id,
      user_id,
      total,
    });
    await newOrder_Details.save();
    return res.status(200).json({
      success: true,
      message: "Order_Details muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Order_Details yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrder_Details
exports.getOrder_Details = async (req, res) => {
  try {
    const order_details = await Order_Details.find();
    return res.status(200).json({
      success: true,
      message: "Order_Detailslar ro'yhati!",
      order_detailss: order_details,
    });
  } catch (error) {
    console.error(
      "Order_Detailslar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getOrder_DetailsById
exports.getOrder_DetailsById = async (req, res) => {
  try {
    const order_detailsId = req.params.id;
    const order_details = await Order_Details.findById(order_detailsId);
    if (!order_details) {
      return res.status(404).json({
        success: false,
        message: "Order_Details topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order_Details ma'lumotlari!",
        order_details: order_details,
      });
    }
  } catch (error) {
    console.error(
      "Order_Details ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateOrder_Details
exports.updateOrder_Details = async (req, res) => {
  try {
    const { id } = req.params;
    const { total } = req.body;
    const updatedOrder_details = await Order_Details.findByIdAndUpdate(
      id,
      { total },
      { new: true }
    );
    if (!updatedOrder_details) {
      return res.status(404).json({
        success: false,
        message: "Order_Details topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order_Details muvaffaqiyatli o'zgartirildi!",
        order_details: updatedOrder_details,
      });
    }
  } catch (error) {
    console.error("Order_Detailsni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteOrder_Details
exports.deleteOrder_Details = async (req, res) => {
  try {
    const order_detailsId = req.params.id;
    const order_details = await Order_Details.findByIdAndDelete(
      order_detailsId
    );
    if (!order_details) {
      return res.status(404).json({
        success: false,
        message: "Order_Details topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order_Details muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Order_Detailsni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
