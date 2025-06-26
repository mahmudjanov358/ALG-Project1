const { ProductV } = require("../models/productVSchema"); // ----ProductV Model

exports.postProductV = async (req, res) => {
  try {
    const { product_id, price, color } = req.body;
    const newProductV = await ProductV({
      product_id,
      price,
      color,
    });
    await newProductV.save();
    return res.status(200).json({
      success: true,
      message: "ProductV created successfully!",
    });
  } catch (error) {
    console.error("Error creating ProductV — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postProductV

exports.getProductV = async (req, res) => {
  try {
    const productV = await ProductV.find({});
    return res.status(200).json({
      success: true,
      message: "ProductV list!",
      productVs: productV,
    });
  } catch (error) {
    console.error("Error retrieving ProductV list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductV

exports.getProductVById = async (req, res) => {
  try {
    const productVId = req.params.id;
    const productV = await ProductV.findById(productVId);

    if (!productV) {
      return res.status(404).json({
        success: false,
        message: "ProductV not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductV found!",
        productV: productV,
      });
    }
  } catch (error) {
    console.error("Error searching for ProductV id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductVById

exports.updateProductV = async (req, res) => {
  try {
    const { id } = req.params;
    const productV = await ProductV.findByIdAndUpdate(
      id,
      { price, color },
      { new: true }
    );

    if (!productV) {
      return res.status(404).json({
        success: false,
        message: "ProductV not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductV found!",
        productV: productV,
      });
    }
  } catch (error) {
    console.error("Error updated ProductV — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateProductV

exports.deleteProductV = async (req, res) => {
  try {
    const productVId = req.params.id;
    const deletedProductV = await ProductV.findByIdAndDelete(productVId);

    if (!deletedProductV) {
      return res.status(404).json({
        success: false,
        message: "ProductV not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductV deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted ProductV — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteProductV
