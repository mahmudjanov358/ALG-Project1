const Product_Variant = require("../models/product_variantSchema"); // ----Product_Variant

// ----postProduct_Variant
exports.postProduct_Variant = async (req, res) => {
  try {
    const { product_id, price, color } = req.body;
    const newProduct_Variant = new Product_Variant({
      product_id,
      price,
      color,
    });
    await newProduct_Variant.save();
    return res.status(200).json({
      success: true,
      message: "Product_Variant muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Product_Variant yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_Variant
exports.getProduct_Variant = async (req, res) => {
  try {
    const product_variant = await Product_Variant.find();
    return res.status(200).json({
      success: true,
      message: "Product_Variantlar ro'yhati!",
      product_variants: product_variant,
    });
  } catch (error) {
    console.error(
      "Product_Variantlar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_VariantById
exports.getProduct_VariantById = async (req, res) => {
  try {
    const product_variantId = req.params.id;
    const product_variant = await Product_Variant.findById(
      product_variantId
    ).populate("product_id");
    if (!product_variant) {
      return res.status(404).json({
        success: false,
        message: "Product_Variant topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Variant ma'lumotlari!",
        product_variant: product_variant,
      });
    }
  } catch (error) {
    console.error(
      "Product_Variant ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct_Variant
exports.updateProduct_Variant = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, color } = req.body;
    const updatedProduct_Variant = await Product_Variant.findByIdAndUpdate(
      id,
      { price, color },
      { new: true }
    );
    if (!updatedProduct_Variant) {
      return res.status(404).json({
        success: false,
        message: "Product_Variant topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Variant muvaffaqiyatli o'zgartirildi!",
        product_variant: updatedProduct_Variant,
      });
    }
  } catch (error) {
    console.error(
      "Product_Variantni o'zgartirishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct_Variant
exports.deleteProduct_Variant = async (req, res) => {
  try {
    const product_variantId = req.params.id;
    const product_variant = await Product_Variant.findByIdAndDelete(
      product_variantId
    );
    if (!product_variant) {
      return res.status(404).json({
        success: false,
        message: "Product_Variant topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Variant muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Product_Variantni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
