const { Discount } = require("../models/discountSchema"); // ----Discount

// ----postDiscount
exports.postDiscount = async (req, res) => {
  try {
    const { name, description, percent } = req.body;
    const newDiscount = new Discount({
      name,
      description,
      percent,
    });
    await newDiscount.save();
    return res.status(200).json({
      success: true,
      message: "Discount muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Discount yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getDiscount
exports.getDiscount = async (req, res) => {
  try {
    const discount = await Discount.find();
    return res.status(200).json({
      success: true,
      message: "Discountlar ro'yhati!",
      discounts: discount,
    });
  } catch (error) {
    console.error("Discountlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getDiscountById
exports.getDiscountById = async (req, res) => {
  try {
    const discountId = req.params.id;
    const discount = await Discount.findById(discountId);
    if (!discount) {
      return res.status(404).json({
        success: false,
        message: "Discount topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Discount ma'lumotlari!",
        discount: discount,
      });
    }
  } catch (error) {
    console.error("Discount ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateDiscount
exports.updateDiscount = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, percent } = req.body;
    const updatedDiscount = await Discount.findByIdAndUpdate(
      id,
      { name, description, percent },
      { new: true }
    );
    if (!updatedDiscount) {
      return res.status(404).json({
        success: false,
        message: "Discount topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Discount muvaffaqiyatli o'zgartirildi!",
        discount: updatedDiscount,
      });
    }
  } catch (error) {
    console.error("Discountni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteDiscount
exports.deleteDiscount = async (req, res) => {
  try {
    const discountId = req.params.id;
    const discount = await Discount.findByIdAndDelete(discountId);
    if (!discount) {
      return res.status(404).json({
        success: false,
        message: "Discount topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Discount muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Discountni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
