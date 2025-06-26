const { Admin } = require("../models/adminSchema"); // ----Admin Model

exports.postAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Admin — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postAdmin

exports.getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find({});
    return res.status(200).json({
      success: true,
      message: "Admin",
      admin: admin,
    });
  } catch (error) {
    console.error("Error retrieving Admin list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getAdmin

exports.getAdminById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Admin id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getAdminById

exports.updateAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Admin — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateAdmin

exports.deleteAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Admin — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteAdmin
