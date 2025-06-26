const { Favorite } = require("../models/favoriteSchema"); // ----Favorite Model

exports.postFavorite = async (req, res) => {
  try {
    const { user_id, product_id } = req.body;
    const newFavorite = await Favorite({
      user_id,
      product_id,
    });
    await newFavorite.save();
    return res.status(200).json({
      success: true,
      message: "Favorite created successfully!",
    });
  } catch (error) {
    console.error("Error creating Favorite — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postFavorite

exports.getFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.find({});
    return res.status(200).json({
      success: true,
      message: "Favorite list!",
      favorites: favorite,
    });
  } catch (error) {
    console.error("Error retrieving Favorite list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getFavorite

exports.getFavoriteById = async (req, res) => {
  try {
    const favoriteId = req.params.id;
    const favorite = await Favorite.findById(favoriteId);

    if (!favorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Favorite found!",
        favorite: favorite,
      });
    }
  } catch (error) {
    console.error("Error searching for Favorite id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getFavoriteById

exports.deleteFavorite = async (req, res) => {
  try {
    const favoriteId = req.params.id;
    const deletedFavorite = await Favorite.findByIdAndDelete(favoriteId);

    if (!deletedFavorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Favorite deleted successfully!",
      });
    }
  } catch (error) {
    console.error("Error deleted Favorite — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteFavorite
