const { ProductR } = require("../models/productRSchema"); // ----ProductR Model

exports.postProductR = async (req, res) => {
  try {
    const { product_id, user_id, review_text, rating } = req.body;
    const newProductR = await ProductR({
      product_id,
      user_id,
      review_text,
      rating,
    });
    await newProductR.save();
    return res.status(200).json({
      success: true,
      message: "ProductR created successfully!",
    });
  } catch (error) {
    console.error("Error creating ProductR — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postProductR

exports.getProductR = async (req, res) => {
  try {
    const productR = await ProductR.find({});
    return res.status(200).json({
      success: true,
      message: "ProductR list!",
      productRs: productR,
    });
  } catch (error) {
    console.error("Error retrieving ProductR list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductR

exports.getProductRById = async (req, res) => {
  try {
    const productRId = req.params.id;
    const productR = await ProductR.findById(productRId);

    if (!productR) {
      return res.status(404).json({
        success: false,
        message: "ProductR not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductR found!",
        productR: productR,
      });
    }
  } catch (error) {
    console.error("Error searching for ProductR id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductRById

exports.updateProductR = async (req, res) => {
  try {
    const { id } = req.params;
    const { review_text, rating } = req.body;
    const updatedProductR = await ProductR(
      id,
      { review_text, rating },
      { new: true }
    );

    if (!updatedProductR) {
      return res.status(404).json({
        success: false,
        message: "ProductR not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductR updated successfully!",
        productR: updatedProductR,
      });
    }
  } catch (error) {
    console.error("Error updated ProductR — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateProductR

exports.deleteProductR = async (req, res) => {
  try {
    const productRId = req.params.id;
    const deletedProductR = await ProductR.findByIdAndDelete(productRId);

    if (!deletedProductR) {
      return res.status(404).json({
        success: false,
        message: "ProductR not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductR deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted ProductR — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteProductR
