const Product_Comment = require("../models/product_commentSchema"); // ----Product_Comment

// ----postProduct_Comment
exports.postProduct_Comment = async (req, res) => {
  try {
    const { user_id, product_id, comment } = req.body;
    const newProduct_Comment = new Product_Comment({
      user_id,
      product_id,
      comment,
    });
    await newProduct_Comment.save();
    return res.status(200).json({
      success: true,
      message: "Product_Comment muvaffaqiyatli yaratildi!",
    });
  } catch (error) {
    console.error("Product_Comment yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_Comment
exports.getProduct_Comment = async (req, res) => {
  try {
    const product_comment = await Product_Comment.find({});
    return res.status(200).json({
      success: true,
      message: "Product_Comment ro'yhati!",
      product_comments: product_comment,
    });
  } catch (error) {
    console.error(
      "Product_Commentlar ro'yhatini olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getProduct_CommentById
exports.getProduct_CommentById = async (req, res) => {
  try {
    const product_commentId = req.params.id;
    const product_comment = await Product_Comment.findById(
      product_commentId
    ).populate("user_id product_id");
    if (!product_comment) {
      return res.status(404).json({
        success: false,
        message: "Product_Comment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Comment ma'lumotlari!",
        product_comment: product_comment,
      });
    }
  } catch (error) {
    console.error(
      "Product_Comment ID bo'yicha olishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----updateProduct_Comment
exports.updateProduct_Comment = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const updatedProduct_Comment = await Product_Comment.findByIdAndUpdate(
      id,
      { comment },
      { new: true }
    );
    if (!updatedProduct_Comment) {
      return res.status(404).json({
        success: false,
        message: "Product_Comment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Comment muvaffaqiyatli yangilandi!",
      });
    }
  } catch (error) {
    console.error(
      "Product_Commentni o'zgartirishda Xatolik! — ",
      error.message
    );
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteProduct_Comment
exports.deleteProduct_Comment = async (req, res) => {
  try {
    const product_commentId = req.params.id;
    const product_comment = await Product_Comment.findByIdAndDelete(
      product_commentId
    );
    if (!product_comment) {
      return res.status(404).json({
        success: false,
        message: "Product_Comment topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Product_Comment muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Product_Commentni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
