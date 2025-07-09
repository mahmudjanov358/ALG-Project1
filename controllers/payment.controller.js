const { Payment } = require("../models/paymentSchema");

// ----postPayment
exports.postPayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Payment yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getPayment
exports.getPayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Paymentlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getPaymentById
exports.getPaymentById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Payment ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updatePayment
exports.updatePayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Paymentni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deletePayment
exports.deletePayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Paymentni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
