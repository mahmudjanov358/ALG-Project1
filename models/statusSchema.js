const { Schema, model } = require("mongoose");

const statusSchema = new Schema({
  status: { type: BigInt },
});

const Status = model("Status", statusSchema);
module.exports = { Status };
