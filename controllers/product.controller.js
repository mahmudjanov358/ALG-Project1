const { Product } = require("../models/productSchema"); // ----Product

// ----postProduct
exports.postProduct = async (req, res) => {
  try {
    const { name, description, photo, price, count, category_id, discount_id } =
      req.body;
    const newProduct = new Product({
      name,
      description,
      photo,
      price,
      count,
      category_id,
      discount_id,
    });
    await newProduct.save();
    return res.status(200).json({
      success: true,
      message: "Product muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Product yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find();
    return res.status(200).json({
      success: true,
      message: "Productlar ro'yhati!",
      products: product,
    });
  } catch (error) {
    console.error("Productlar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProductById
exports.getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product ma'lumotlari!",
        product: product,
      });
    }
  } catch (error) {
    console.error("Product ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, photo, price, count } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, photo, price, count },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product muvaffaqiyatli o'zgartirildi!",
        product: updatedProduct,
      });
    }
  } catch (error) {
    console.error("Productni o'zgartirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct
exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Productni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
