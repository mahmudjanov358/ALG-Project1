const { Order } = require("../models/orderSchema"); // ----Order Model

exports.postOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Order list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getOrderById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Order id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteOrder = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Order — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
