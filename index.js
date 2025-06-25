const express = require("express"); // ----Express Library
const { connect } = require("mongoose"); // ----Mongoose Library
const cors = require("cors"); // ----Cors Library
require("dotenv").config(); // ----Environment Variables Library

const app = express(); // ----App Instance

// ----Middleware
app.use(express.json());
app.use(cors());

// ----Database connectToDB
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB is connected!");
  } catch (error) {
    console.error("MongoDb connected failed: ", error.message);
  }
}
connectToDB();

//----Routes
const { user } = require("./routes/user.routes"); // ----User
app.use("/user", user);

// ----Server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
