const { Status } = require("../models/statusSchema"); // ----Status Model

exports.postStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newStatus = await Status({
      status,
    });
    await newStatus.save();
    return res.status(200).json({
      success: true,
      message: "Status created successfully!",
    });
  } catch (error) {
    console.error("Error creating Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postStatus

exports.getStatus = async (req, res) => {
  try {
    const status = await Status.find({});
    return res.status(200).json({
      success: true,
      message: "Statuss list!",
      statuss: status,
    });
  } catch (error) {
    console.error("Error retrieving Status list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getStatus

exports.getStatusById = async (req, res) => {
  try {
    const statusId = req.params.id;
    const status = await Status.findById(statusId);

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "Status not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Status found!",
        status: status,
      });
    }
  } catch (error) {
    console.error("Error searching for Status id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getStatusById

exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedStatus = await Status.findByIdAndUpdate(
      id,
      {
        status,
      },
      { new: true }
    );

    if (!updatedStatus) {
      return res.status(404).json({
        success: false,
        message: "Status not found!",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Status updated successfully!",
        status: updatedStatus,
      });
    }
  } catch (error) {
    console.error("Error updated Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateStatus

exports.deleteStatus = async (req, res) => {
  try {
    const statusId = req.params.id;
    const deletedStatus = await Status.findByIdAndDelete(statusId);

    if (!deletedStatus) {
      return res.status(404).json({
        success: false,
        message: "Status not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Status deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted Status — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteStatus
