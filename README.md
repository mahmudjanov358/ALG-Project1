# Project1

Bu loyiha **Project1** asosan amaliy ishlar uchun ishlab chiqilgan. Loyiha Express.js asosida backend API yaratish, Swagger yordamida API hujjatlarini avtomatik generatsiya qilish va turli bo‘limlar (Admin, Cart, Category, Product va boshqalar) bilan ishlashni o‘z ichiga oladi.

## Loyihaning asosiy imkoniyatlari

- **Admin bo‘limi:** Adminlarni yaratish, tizimga kiritish (login), ro‘yxatini ko‘rish, ID bo‘yicha olish va yangilash imkoniyati mavjud.
- **Cart, Category, Product va boshqa bo‘limlar:** Har bir bo‘lim uchun alohida endpointlar mavjud va ular Swagger orqali hujjatlashtirilgan.
- **Validatsiya:** So‘rovlar uchun maxsus validatsiya middleware’lari ishlatilgan.
- **Swagger UI:** API endpointlarini ko‘rish va test qilish uchun Swagger UI integratsiya qilingan.

## Texnologiyalar

- Node.js
- Express.js
- Swagger (swagger-jsdoc, swagger-ui-express)
- JavaScript

## Loyihaning tuzilmasi

- `config/` - Swagger va boshqa konfiguratsiyalar
- `controllers/` - Har bir bo‘lim uchun logika
- `middlewares/` - Validatsiya va boshqa oraliq funksiyalar
- `models/` - Loyihaning modelslari
- `routes/` - API endpointlar joylashgan
- `validations/` - So‘rovlar uchun validatsiya sxemalari
- `.gitignore/` - Github tarkibiga tegishli bo'lmaganlar
- `index.js/` - Asosiy Server fayli

1. **Repository-ni klonlash:**

   ```bash
   git clone https://github.com/mahmudjanov358/Back-Project1.git
   cd Project1
   ```

2. **Kerakli paketlarni o‘rnatish:**

   ```bash
   npm i bcrypt body-parser cors dotenv express joi jsonwebtoken mongoose nodemon swagger-jsdoc swagger-ui-express
   ```

3. **Serverni ishga tushurish:**
   ```bash
   1  npm run go
   2  npm run start
   3  node index.js
   ```

## Modelslar — 1-Admin; 2-Cart; 3-Cart_Item; 4-Category; 5-Discount; 6-Favorite; 7-Order; 8-Order_Details; 9-Payment; 10-Product; 11-Product_Comment; 12-Product_Reviews; 13-Product_Variant; 14-Status; 15-User

Swagger UI orqali barcha endpointlarni ko‘rish va test qilish uchun quyidagi manzilga o‘ting: http://localhost:2000
