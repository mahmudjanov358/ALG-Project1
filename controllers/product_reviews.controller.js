const Product_Reviews = require("../models/product_reviewsSchema"); // ----Product_Reviews

// ----postProduct_Reviews
exports.postProduct_Reviews = async (req, res) => {
  try {
    const { user_id, product_id, review_text, rating } = req.body;
    const newProduct_Reviews = new Product_Reviews({
      user_id,
      product_id,
      review_text,
      rating,
    });
    await newProduct_Reviews.save();
    return res.status(200).json({
      success: true,
      message: "Product_Reviews muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Product_Reviews yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_Reviews
exports.getProduct_Reviews = async (req, res) => {
  try {
    const product_reviews = await Product_Reviews.find();
    return res.status(200).json({
      success: true,
      message: "Product_Reviewlar ro'yhati!",
      product_reviews: product_reviews,
    });
  } catch (error) {
    console.error(
      "Product_Reviewslar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_ReviewsById
exports.getProduct_ReviewsById = async (req, res) => {
  try {
    const product_reviewsId = req.params.id;
    const product_reviews = await Product_Reviews.findById(product_reviewsId);
    if (!product_reviews) {
      return res.status(404).json({
        success: false,
        message: "Product_Reviews topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Reviews ma'lumotlari!",
        product_reviews: product_reviews,
      });
    }
  } catch (error) {
    console.error(
      "Product_Reviews ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct_Reviews
exports.updateProduct_Reviews = async (req, res) => {
  try {
    const { id } = req.params;
    const { review_text, rating } = req.body;
    const updatedProduct_Reviews = await Product_Reviews.findByIdAndUpdate(
      id,
      { review_text, rating },
      { new: true }
    );
    if (!updatedProduct_Reviews) {
      return res.status(404).json({
        success: false,
        message: "Product_Reviews topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Reviews muvaffaqiyatli o'zgartirildi!",
        product_reviews: updatedProduct_Reviews,
      });
    }
  } catch (error) {
    console.error(
      "Product_Reviewsni o'zgartirishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct_Reviews
exports.deleteProduct_Reviews = async (req, res) => {
  try {
    const product_reviewsId = req.params.id;
    const product_reviews = await Product_Reviews.findByIdAndDelete(
      product_reviewsId
    );
    if (!product_reviews) {
      return res.status(404).json({
        success: false,
        message: "Product_Reviews topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Reviews muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Product_Reviewsni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
