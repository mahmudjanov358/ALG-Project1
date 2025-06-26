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
}; // ----postDiscount

exports.getDiscount = async (req, res) => {
  try {
    const discount = await Discount.find({});
    return res.status(200).json({
      success: true,
      message: "Discount list!",
      discounts: discount,
    });
  } catch (error) {
    console.error("Error retrieving Discount list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getDiscount

exports.getDiscountById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Discount id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getDiscountById

exports.updateDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Discount — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateDiscount

exports.deleteDiscount = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Discount — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteDiscount
