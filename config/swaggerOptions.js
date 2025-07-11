module.exports = swaggerOptions = {
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
      {
        name: "Admin",
        description: "Admin bo'limi bilan ishlash",
      }, // ----Admin
      {
        name: "Cart",
        description: "Cart bo'limi bilan ishlash",
      }, // ----Cart
      {
        name: "Cart_Item",
        description: "Cart_Item bo'limi bilan ishlash",
      }, // ----Cart_Item
      {
        name: "Category",
        description: "Category bo'limi bilan ishlash",
      }, // ----Category
      {
        name: "Discount",
        description: "Discount bo'limi bilan ishlash",
      }, // ----Discount
      {
        name: "Favorite",
        description: "Favorite bo'limi bilan ishlash",
      }, // ----Favorite
      {
        name: "Order",
        description: "Order bo'limi bilan ishlash",
      }, // ----Order
      {
        name: "Order_Details",
        description: "Order_Details bo'limi bilan ishlash",
      }, // ----Order_Details
      {
        name: "Payment",
        description: "Payment bo'limi bilan ishlash",
      }, // ----Payment
      {
        name: "Product",
        description: "Product bo'limi bilan ishlash",
      }, // ----Product
      {
        name: "Product_Comment",
        description: "Product_Comment bo'limi bilan ishlash",
      }, // ----Product_Comment
      {
        name: "Product_Reviews",
        description: "Product_Reviews bo'limi bilan ishlash",
      }, // ----Product_Reviews
      {
        name: "Product_Variant",
        description: "Product_Variant bo'limi bilan ishlash",
      }, // ----Product_Variant
      {
        name: "Status",
        description: "Status bo'limi bilan ishlash",
      }, // ----Status
      {
        name: "User",
        description: "User bo'limi bilan ishlash",
      }, // ----User
    ],
  },
  apis: ["./routes/*.js"],
}; // ----swaggerOptions
