const { Schema, model } = require("mongoose");
const { User } = require("./userSchema");
const { Product } = require("./productSchema");

const favoriteSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: Product, required: true },
});

const Favorite = model("Favorite", favoriteSchema);
module.exports = { Favorite };
