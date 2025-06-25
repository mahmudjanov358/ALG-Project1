const { Favorite } = require("../models/favoriteSchema"); // ----Favorite Model

exports.postFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error creating Favorite — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error retrieving Favorite list — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.getFavoriteById = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error searching for Favorite id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error deleted Favorite — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
