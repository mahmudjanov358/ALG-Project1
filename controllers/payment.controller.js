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
};

exports.getPayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Payment list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getPaymentById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Payment id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updatePayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deletePayment = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Payment — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
