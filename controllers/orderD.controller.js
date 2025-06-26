const { OrderD } = require("../models/orderDSchema"); // ----OrderD Model

exports.postOrderD = async (req, res) => {
  try {
    const { payment_id, user_id, total } = req.body;
    const newOrderD = await OrderD({
      payment_id,
      user_id,
      total,
    });
    await newOrderD.save();
    return res.status(200).json({
      success: true,
      message: "OrderD created successfully!",
    });
  } catch (error) {
    console.error("Error creating OrderD — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postOrderD

exports.getOrderD = async (req, res) => {
  try {
    const orderD = await OrderD.find({});
    return res.status(200).json({
      success: true,
      message: "OrderD list!",
      orderDs: orderD,
    });
  } catch (error) {
    console.error("Error retrieving OrderD list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrderD

exports.getOrderDById = async (req, res) => {
  try {
    const orderDId = req.params.id;
    const orderD = await OrderD.findById(orderDId);

    if (!orderD) {
      return res.status(404).json({
        success: false,
        message: "OrderD not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "OrderD found!",
        orderD: orderD,
      });
    }
  } catch (error) {
    console.error("Error searching for OrderD id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getOrderDById

exports.updateOrderD = async (req, res) => {
  try {
    const { id } = req.params;
    const { total } = req.body;
    const updatedorderD = await OrderD.findByIdAndUpdate(
      id,
      { total },
      { new: true }
    );

    if (!updatedorderD) {
      return res.status(404).json({
        success: false,
        message: "OrderD not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "OrderD updated successfully!",
        orderD: updatedorderD,
      });
    }
  } catch (error) {
    console.error("Error updated OrderD — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateOrderD

exports.deleteOrderD = async (req, res) => {
  try {
    const orderDId = req.params.id;
    const deletedOrderD = await OrderD.findByIdAndDelete(orderDId);

    if (!deletedOrderD) {
      return res.status(404).json({
        success: false,
        message: "OrderD not found!",
      });
    } else {
      return res.statusO(200).json({
        success: true,
        message: "OrderD deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted OrderD — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteOrderD
