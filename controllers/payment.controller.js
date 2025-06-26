const { Payment } = require("../models/paymentSchema"); // ----Payment Model

exports.postPayment = async (req, res) => {
  try {
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
  } catch (error) {
    console.error("Error deleted Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deletePayment
