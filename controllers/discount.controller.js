const { Discount } = require("../models/discountSchema"); // ----Discount Model

exports.postDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Discount — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Discount list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getDiscountById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Discount id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Discount — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Discount — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
