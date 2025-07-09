const { Status } = require("../models/statusSchema");

// ----postStatus
exports.postStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Status yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getStatus
exports.getStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Statuslar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getStatusById
exports.getStatusById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Status ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateStatus
exports.updateStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Statusni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteStatus
exports.deleteStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Statusni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
