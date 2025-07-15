const Admin = require("../models/adminSchema"); // ----Admin
const bcrypt = require("bcrypt"); // ----Bcrypt
const jwt = require("jsonwebtoken"); // ----Jsonwebtoken

// ----postAdmin
exports.postAdmin = async (req, res) => {
  try {
    const { name, lastName, email, password, is_active } = req.body;
    const existingAdmin = await Admin.findOne({ email });
    console.log(existingAdmin);
    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message: "Admin band etilgan!",
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const newAdmin = new Admin({
        name,
        lastName,
        email,
        password: hashPassword,
        is_active,
      });
      await newAdmin.save();
      return res.status(200).json({
        success: true,
        message: "Admin muvaffaqiyatli yaratildi!",
      });
    }
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
    const { email, password } = req.body;
    const emailName = await Admin.findOne({ email });
    console.log(emailName);
    if (!emailName) {
      return res.status(404).json({
        success: false,
        message: "Email topilmadi!",
      });
    }
    const passwordMatch = await bcrypt.compare(password, emailName.password);
    if (!passwordMatch) {
      return res.status(400).json({
        success: false,
        message: "Email yoki parol xato!",
      });
    }
    const token = jwt.sign(
      { id: emailName._id, email: emailName.email, name: emailName.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      success: true,
      message: "Kirish muvaffaqiyatli!",
      token: token,
    });
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
    const admin = await Admin.find({});
    return res.status(200).json({
      success: true,
      message: "Adminlar ro'yhati",
      admins: admin,
    });
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
    const adminId = req.params.id;
    const admin = await Admin.findById(adminId);
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin topilmadi",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Admin ma'lumotlari!",
        admin: admin,
      });
    }
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
    const { id } = req.params;
    const { name, lastName, email, password, is_active } = req.body;
    const updateFields = { name, lastName, email, is_active };
    if (password) {
      updateFields.password = await bcrypt.hash(password, 10);
    }
    const updatedAdmin = await Admin.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    if (!updatedAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin topilmadi!",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Admin muvaffaqiyatli yangilandi!",
    });
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
    const adminId = req.params.id;
    const admin = await Admin.findByIdAndDelete(adminId);
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Admin muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Adminni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
