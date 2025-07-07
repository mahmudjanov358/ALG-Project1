const { Admin } = require("../models/adminSchema");

// ----postAdmin
exports.postAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Admin yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----loginAdmin
exports.loginAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Admin tizmiga kirishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getAdmin
exports.getAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Adminlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getAdminById
exports.getAdminById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Admin ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateAdmin
exports.updateAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Adminni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteAdmin
exports.deleteAdmin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Adminni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
