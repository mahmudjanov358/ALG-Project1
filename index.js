const express = require("express"); // ----Express Library
const { connect } = require("mongoose"); // ----Mongoose Library
const cors = require("cors"); // ----Cors Library
require("dotenv").config(); // ----Dotenv Library
const swaggerJsdoc = require("swagger-jsdoc"); // ----Swagger-Jsdoc Library
const swaggerUi = require("swagger-ui-express"); // ----Swagger-Ui-Express Library
const swaggerOptions = require("./src/configs/swaggerOptions"); // ----Configs Swagger Options

const app = express(); // ----Express Server

// ----Middleware
app.use(express.json()); // ----Express JSON Middleware
app.use(cors()); // ----Cors Middleware

async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB muvaffaqiyatli ulandi!");
  } catch (error) {
    console.error("MongoDB muvaffaqiyatsiz ulandi! — ", error.message);
  }
}
connectToDB(); // ----Database connectToDB

// ----Swagger Documentation
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ----Routers
const product_r = require("./src/routers/product_reviews.routes"); // ----Product_Reviews
app.use("/product_reviews", product_r);
const product_v = require("./src/routers/product_variant.routes"); // ----Product_Variant
app.use("/product_variant", product_v);
const cart_item = require("./src/routers/cart_item.routes"); // ----Cart_Item
app.use("/cart_item", cart_item);
const status = require("./src/routers/status.routes"); // ----Status
app.use("/status", status);
const product_c = require("./src/routers/product_comment.routes"); // ----Product_Comment
app.use("/product_comment", product_c);
const favorite = require("./src/routers/favorite.routes"); // ----Favorite
app.use("/favorite", favorite);
const payment = require("./src/routers/payment.routes"); // ----Payment
app.use("/payment", payment);
const order = require("./src/routers/order.routes"); // ----Order
app.use("/order", order);
const order_d = require("./src/routers/order_details.routes"); // ----Order_Details
app.use("/order_details", order_d);
const cart = require("./src/routers/cart.routes"); // ----Cart
app.use("/cart", cart);
const discount = require("./src/routers/discount.routes"); // ----Discount
app.use("/discount", discount);
const category = require("./src/routers/category.routes"); // ----Category
app.use("/category", category);
const product = require("./src/routers/product.routes"); // ----Product
app.use("/product", product);
const admin = require("./src/routers/admin.routes"); // ----Admin
app.use("/admin", admin);
const user = require("./src/routers/user.routes"); // ----User
app.use("/user", user);

const PORT = process.env.PORT || 2000; // ----Server PORT
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishga tushdi!`);
}); // ----Server ishga tushirish
