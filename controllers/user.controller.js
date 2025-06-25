const { User } = require("../models/userSchema"); // ----User Model

exports.postUser = async (req, res) => {
  try {
    const { username, name, lastName, phone, email, address, photo } = req.body;
    const existingUser = await User.findOne({ username });
    console.log(existingUser);

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "This name has been banned!",
      });
    } else {
      const newUser = await User({
        username,
        name,
        lastName,
        phone,
        email,
        address,
        photo,
      });
      await newUser.save();

      return res.status(200).json({
        success: true,
        message: "User created successfully!",
      });
    }
  } catch (error) {
    console.error("Error creating user —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error,
    });
  }
}; // ----postUser

exports.postUserLogin = async (req, res) => {
  try {
  } catch (error) {
    console.error("Error login user — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----postUserLogin

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).json({
      success: true,
      message: "Users list!",
      users: user,
    });
  } catch (error) {
    console.error("Error retrieving user list", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getUser

exports.getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        user: user,
      });
    }
  } catch (error) {
    console.error("Error searching for user id — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----getUserById

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, name, lastName, phone, email, address, photo } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        name,
        lastName,
        phone,
        email,
        address,
        photo,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User updated successfully!",
        user: updatedUser,
      });
    }
  } catch (error) {
    console.error("Error updating user —", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----updateUser

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params;
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "User deleted successfully!",
        user: deletedUser,
      });
    }
  } catch (error) {
    console.error("Error deleted user — ", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
}; // ----deleteUser
