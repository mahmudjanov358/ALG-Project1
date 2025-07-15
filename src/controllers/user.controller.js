const User = require("../models/userSchema"); // ----User

// ----postUser
exports.postUser = async (req, res) => {
  try {
    const { username, name, lastName, phone, email, address, photo } = req.body;
    const newUser = new User({
      username,
      name,
      lastName,
      phone,
      email,
      address,
      photo,
    });
    await newUser.save();
    return res.status(200).json({
      success: true,
      message: "User muvaffaqiyatli yaratildi!",
    });
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
    const user = await User.find();
    return res.status(200).json({
      success: true,
      message: "Userlar ro'yhati!",
      users: user,
    });
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
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User ma'lumotlari!",
        user: user,
      });
    }
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
    const { id } = req.params;
    const { username, name, lastName, phone, email, address, photo } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { username, name, lastName, phone, email, address, photo },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User muvaffaqiyatli o'zgartirildi!",
        user: updatedUser,
      });
    }
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
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Userni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
