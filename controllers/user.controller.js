const { User } = require("../models/userSchema");

// ----postUser
exports.postUser = async (req, res) => {
  try {
  } catch (error) {
    console.error("User yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getUser
exports.getUser = async (req, res) => {
  try {
  } catch (error) {
    console.error("Userlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getUserById
exports.getUserById = async (req, res) => {
  try {
  } catch (error) {
    console.error("User ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateUser
exports.updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.error("Userni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteUser
exports.deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.error("Userni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
