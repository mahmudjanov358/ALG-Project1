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
};

exports.getAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Admin list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getAdminById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Admin id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Admin — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Admin — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
