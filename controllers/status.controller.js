const { Status } = require("../models/statusSchema"); // ----Status Model

exports.postStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Status list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getStatusById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Status id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error updated Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteStatus = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
