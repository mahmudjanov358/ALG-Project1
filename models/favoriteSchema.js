const { Schema, model } = require("mongoose"); // ----Mongoose
const { User } = require("./userSchema"); // ----User
const { Product } = require("./productSchema"); // ----Product

const favoriteSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
}); // ----favoriteSchema

const Favorite = model("Favorite", favoriteSchema); // ----Favorite
module.exports = { Favorite }; // ----Favorite
