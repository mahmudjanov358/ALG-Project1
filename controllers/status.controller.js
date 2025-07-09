const { Status } = require("../models/statusSchema");

// ----postStatus
exports.postStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const newStatus = new Status({
      status,
    });
    await newStatus.save();
    return res.status(200).json({
      success: true,
      message: "Status muvaffaqiyatli yaratildi!",
    });
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
    const status = await Status.find({});
    return res.status(200).json({
      success: true,
      message: "Statuslar ro'yhati!",
      statuss: status,
    });
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
    const statusId = req.params.id;
    const status = await Status.findById(statusId);

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "Status topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Status ma'lumotlari!",
        status: status,
      });
    }
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
    const { id } = req.params;
    const { status } = req.body;
    const updatedStatus = await Status.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedStatus) {
      return res.status(404).json({
        success: false,
        message: "Status topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Status muvaffaqiyatli yangilandi!",
      });
    }
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
    const statusId = req.params.id;
    const status = await Status.findByIdAndDelete(statusId);

    if (!status) {
      return res.status(404).json({
        success: false,
        message: "Status muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Statusni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
