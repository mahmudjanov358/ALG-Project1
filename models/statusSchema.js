const { Schema, model } = require("mongoose"); // ----Mongoose

const statusSchema = new Schema({
  status: { type: String, required: true },
}); // ----statusSchema

const Status = model("Status", statusSchema); // ----Status
module.exports = { Status }; // ----Status
