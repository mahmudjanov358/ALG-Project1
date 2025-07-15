const Favorite = require("../models/favoriteSchema"); // ----Favorite

// ----postFavorite
exports.postFavorite = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const newFavorite = new Favorite({
      user_id,
      product_id,
    });
    await newFavorite.save();
    return res.status(200).json({
      success: true,
      message: "Favorite muvaffaqiyatli yaratildi!",
    });
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
    const favorite = await Favorite.find({});
    return res.status(200).json({
      success: true,
      message: "Favorites ro'yhati!",
      favorites: favorite,
    });
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
    const favoriteId = req.params.id;
    const favorite = await Favorite.findById(favoriteId).populate(
      "user_id product_id"
    );
    if (!favorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Favorite ma'lumotlari!",
        favorite: favorite,
      });
    }
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
    const favoriteId = req.params.id;
    const favorite = await Favorite.findByIdAndDelete(favoriteId);
    if (!favorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite topilmadi!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Favorite muvaffaqiyatli o'chirildi!",
      });
    }
  } catch (error) {
    console.error("Favoriteni o'chirishda Xatolik! — ", error.message);
    return res.status(500).json({
      success: false,
      message: "Ichki Server Xatosi!",
    });
  }
};
