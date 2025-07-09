const { Favorite } = require("../models/favoriteSchema");

// ----postFavorite
exports.postFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error("Favorite yaratilishida Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getFavorite
exports.getFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error("Favoritelar ro'yhatini olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----getFavoriteById
exports.getFavoriteById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Favorite ID bo'yicha olishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};

// ----deleteFavorite
exports.deleteFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error("Favoriteni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
