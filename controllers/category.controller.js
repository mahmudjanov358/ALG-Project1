const Category = require("../models/categorySchema"); // ----Category

// ----postCategory
exports.postCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = new Category({
      name,
    });
    await newCategory.save();
    return res.status(200).json({
      success: true,
      message: "Category muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Category yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCategory
exports.getCategory = async (req, res) => {
  try {
    const category = await Category.find();
    return res.status(200).json({
      success: true,
      message: "Categorylar ro'yhati!",
      categorys: category,
    });
  } catch (error) {
    console.error("Categorylar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getCategoryById
exports.getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Category ma'lumotlari!",
        category: category,
      });
    }
  } catch (error) {
    console.error("Category ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateCategory
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({
        success: false,
        message: "Category topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Category muvaffaqiyatli o'zgartirildi!",
        category: updatedCategory,
      });
    }
  } catch (error) {
    console.error("Categoryni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteCategory
exports.deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByIdAndDelete(categoryId);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Category muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Categoryni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
