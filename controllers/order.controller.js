const { Order } = require("../models/orderSchema"); // ----Order Model

exports.postOrder = async (req, res) => {
  try {
    const { product_id, order_details_id } = req.body;
    const newOrder = await Order({
      product_id,
      order_details_id,
    });
    await newOrder.save();
    return res.status(200).json({
      success: true,
      message: "Order created successfully!",
    });
  } catch (error) {
    console.error("Error creating Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postOrder

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.find({});
    return res.status(200).json({
      success: true,
      message: "Order list!",
      orders: order,
    });
  } catch (error) {
    console.error("Error retrieving Order list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrder

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order found!",
        order: order,
      });
    }
  } catch (error) {
    console.error("Error searching for Order id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrderById

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Order deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteOrder
