const { Schema, model } = require("mongoose"); // ----Mongoose

const categorySchema = new Schema({
  name: { type: String, required: true, trim: true },
}); // ----categorySchema

const Category = model("Category", categorySchema); // ----Category
module.exports = { Category }; // ----Category
