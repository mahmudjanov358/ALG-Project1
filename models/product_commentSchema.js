const { Schema, model } = require("mongoose");
const { User } = require("./userSchema");
const { Product } = require("./productSchema");

const product_commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: User },
  product_id: { type: Schema.Types.ObjectId, ref: Product },
  comment: { type: String, required: true },
});

const Product_Comment = model("Product_Comment", product_commentSchema);
module.exports = { Product_Comment };
