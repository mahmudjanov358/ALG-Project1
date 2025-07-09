const express = require("express"); // ----Express Library
const { connect } = require("mongoose"); // ----Mongoose Library
const cors = require("cors"); // ----Cors Library
require("dotenv").config(); // ----Environment Variables Library
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express(); // ----App Server

// ----Maxsus
app.use(express.json());
app.use(cors());

// ----Database connectToDB
async function connectToDB() {
  try {
    await connect(process.env.MONGO_URL);
    console.log("MongoDB muvaffaqiyatli ulandi!");
  } catch (error) {
    console.error("MongoDB muvaffaqiyatsiz ulandi! — ", error.message);
  }
}
connectToDB();

// ----Swagger Options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express API bilan Swagger",
      version: "1.0.0",
      description: "Swagger yordamida API hujjatlari",
    },
    servers: [
      {
        url: "http://localhost:2000",
      },
    ],
    tags: [
      { name: "Product_R", description: "Product_R bo'limi bilan ishlash" },
      { name: "Product_V", description: "Product_V bo'limi bilan ishlash" },
      { name: "Cart_Item", description: "Cart_Item bo'limi bilan ishlash" },
      { name: "Status", description: "Status bo'limi bilan ishlash" },
      { name: "Product_C", description: "Product_C bo'limi bilan ishlash" },
      { name: "Favorite", description: "Favorite bo'limi bilan ishlash" },
      { name: "Payment", description: "Payment bo'limi bilan ishlash" },
      { name: "Order", description: "Order bo'limi bilan ishlash" },
      { name: "Order_D", description: "Order_D bo'limi bilan ishlash" },
      { name: "Cart", description: "Cart bo'limi bilan ishlash" },
      { name: "Discount", description: "Discount bo'limi bilan ishlash" },
      { name: "Category", description: "Category bo'limi bilan ishlash" },
      { name: "Product", description: "Product bo'limi bilan ishlash" },
      { name: "Admin", description: "Admin bo'limi bilan ishlash" },
      { name: "User", description: "User bo'limi bilan ishlash" },
    ],
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ----Routers
const product_r = require("./routes/product_reviews.routes"); // ----Product_R
app.use("/product_r", product_r);
const product_v = require("./routes/product_variant.routes"); // ----Product_V
app.use("/product_v", product_v);
const cart_item = require("./routes/cart_item.routes"); // ----Cart_Item
app.use("/cart_item", cart_item);
const status = require("./routes/status.routes"); // ----Status
app.use("/status", status);
const product_c = require("./routes/product_comment.routes"); // ----Product_C
app.use("/product_c", product_c);
const favorite = require("./routes/favorite.routes"); // ----Favorite
app.use("/favorite", favorite);
const payment = require("./routes/payment.routes"); // ----Payment
app.use("/payment", payment);
const order = require("./routes/order.routes"); // ----Order
app.use("/order", order);
const order_d = require("./routes/order_details.routes"); // ----Order_D
app.use("/order_d", order_d);
const cart = require("./routes/cart.routes"); // ----Cart
app.use("/cart", cart);
const discount = require("./routes/discount.routes"); // ----Discount
app.use("/discount", discount);
const category = require("./routes/category.routes"); // ----Category
app.use("/category", category);
const product = require("./routes/product.routes"); // ----Product
app.use("/product", product);
const admin = require("./routes/admin.routes"); // ----Admin
app.use("/admin", admin);
const user = require("./routes/user.routes"); // ----User
const { version } = require("joi");
app.use("/user", user);

// ----Server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishga tushdi!`);
});
