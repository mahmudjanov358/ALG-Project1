const { Payment } = require("../models/paymentSchema"); // ----Payment Model

exports.postPayment = async (req, res) => {
  try {
    const { name } = req.body;
    const newPayment = await Payment({
      name,
    });
    await newPayment.save();
    return res.status(200).json({
      success: true,
      message: "Payment created successfully!",
    });
  } catch (error) {
    console.error("Error creating Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postPayment

exports.getPayment = async (req, res) => {
  try {
    const payment = await Payment.find({});
    return res.status(200).json({
      success: true,
      message: "Payment list!",
      payments: payment,
    });
  } catch (error) {
    console.error("Error retrieving Payment list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getPayment

exports.getPaymentById = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const payment = await Payment.findById(paymentId);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment found!",
        payment: payment,
      });
    }
  } catch (error) {
    console.error("Error searching for Payment id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getPaymentById

exports.updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment updated successfully!",
        payment: updatedPayment,
      });
    }
  } catch (error) {
    console.error("Error updated Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updatePayment

exports.deletePayment = async (req, res) => {
  try {
    const paymentId = req.params.id;
    const deletedPayment = await Payment.findByIdAndDelete(paymentId);

    if (!deletedPayment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Payment deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deletePayment
