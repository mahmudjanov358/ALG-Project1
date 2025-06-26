const { ProductC } = require("../models/productCSchema"); // ----ProductC Model

exports.postProductC = async (req, res) => {
  try {
    const { user_id, product_id, comment } = req.body;
    const newProductC = await ProductC({
      user_id,
      product_id,
      comment,
    });
    await newProductC.save();
    return res.status(200).json({
      success: true,
      message: "ProductC created successfully!",
    });
  } catch (error) {
    console.error("Error creating ProductC — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postProductC

exports.getProductC = async (req, res) => {
  try {
    const productC = await ProductC.find({});
    return res.status(200).json({
      success: true,
      message: "ProductC list!",
      productCs: productC,
    });
  } catch (error) {
    console.error("Error retrieving ProductC list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductC

exports.getProductCById = async (req, res) => {
  try {
    const productCId = req.params.id;
    const productC = await ProductC.findById(productCId);

    if (!productC) {
      return res.status(404).json({
        success: false,
        message: "ProductC not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductC found!",
        productC: productC,
      });
    }
  } catch (error) {
    console.error("Error searching for ProductC id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getProductCById

exports.updateProductC = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const updatedProductC = await ProductC(id, { comment }, { new: true });

    if (!updatedProductC) {
      return res.status(404).json({
        success: false,
        message: "ProductC not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductC updated successfully!",
        productC: updatedProductC,
      });
    }
  } catch (error) {
    console.error("Error updated ProductC — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateProductC

exports.deleteProductC = async (req, res) => {
  try {
    const productCId = req.params.id;
    const deletedProductC = await ProductC.findByIdAndDelete(productCId);

    if (!deletedProductC) {
      return res.status(404).json({
        success: false,
        message: "ProductC not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "ProductC deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted ProductC — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteProductC
