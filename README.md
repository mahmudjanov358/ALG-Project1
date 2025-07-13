# 🛠️ Project1 — Express.js API Backend

**Project1** — bu Express.js asosida ishlab chiqilgan RESTful API bo‘lib, Swagger orqali hujjatlashtirish, JWT bilan autentifikatsiya, MongoDB bilan model asosida ma'lumotlar bazasi integratsiyasini o‘z ichiga oladi. Loyihada real hayotdagi tizimlar uchun zarur bo‘lgan barcha asosiy CRUD operatsiyalar mavjud.

---

## 🚀 Xususiyatlar

- 🔐 **Admin moduli:** Ro'yxatdan o'tish, login, yangilash, o‘chirish.
- 🛒 **Cart & Cart_Items:** Foydalanuvchi savatidagi mahsulotlarni boshqarish.
- 🗃️ **Category, Product, Discount:** Mahsulotlar va chegirmalarni modullashtirish.
- ⭐ **Favorite & Reviews:** Foydalanuvchi sevimlilari va izohlar bilan ishlash.
- 💳 **Order & Payment:** Buyurtma va to‘lov ma’lumotlari.
- 📊 **Swagger UI:** Real vaqtda hujjatlashtirilgan API test muhiti.
- ✅ **Joi validatsiya:** Har bir endpoint uchun server tarafdan validatsiya.

---

## 🧱 Texnologiyalar

- `Node.js`, `Express.js`
- `MongoDB`, `Mongoose`
- `Joi` (input validation)
- `JWT` (autentifikatsiya)
- `Swagger` (`swagger-jsdoc`, `swagger-ui-express`)
- `dotenv`, `cors`, `bcrypt`

---

## 📁 Loyihaning Tuzilmasi

```
project1/
├── config/          # Swagger konfiguratsiyasi
├── controllers/     # CRUD logikalar
├── middlewares/     # Validatsiya va token tekshiruvlar
├── models/          # Mongoose schemalar
├── routers/         # Barcha endpointlar marshrutlari
├── validations/     # Joi validatsiya sxemalari
├── .env             # Maxfiy sozlamalar
├── .gitignore       # Git'dan chiqarilgan fayllar
└── index.js         # Kirish nuqtasi (entry point)
```

---

## ⚙️ Ishga tushirish

1. **Repository’ni klonlash:**

```bash
git clone https://github.com/mahmudjanov358/Back-Project1.git
cd Project1
```

2. **Paketlarni o‘rnatish:**

```bash
npm install
```

3. **`.env` faylini yaratish:**

```env
PORT=2000
MONGO_URL=mongodb://localhost:27017/project1
JWT_SECRET=SUPERSCRET46
```

4. **Serverni ishga tushurish:**

```bash
npm run dev       # yoki
npm run go        # yoki
npm start         # yoki
node index.js
```

---

## 📌 Swagger API hujjatlari

👉 Swagger UI’ga kirish uchun:

```
http://localhost:2000/api-docs
```

U yerda har bir endpointni test qilishingiz mumkin (`GET`, `POST`, `PUT`, `DELETE`).

---

## 📚 Model nomlari

| №   | Model           |
| --- | --------------- |
| 1   | Admin           |
| 2   | Cart            |
| 3   | Cart_Item       |
| 4   | Category        |
| 5   | Discount        |
| 6   | Favorite        |
| 7   | Order           |
| 8   | Order_Details   |
| 9   | Payment         |
| 10  | Product         |
| 11  | Product_Comment |
| 12  | Product_Reviews |
| 13  | Product_Variant |
| 14  | Status          |
| 15  | User            |

---

## 🧠 Eslatma

Agar sizda frontend bilan ishlash yoki CORS bilan bog‘liq muammolar bo‘lsa, `cors` middleware ni to‘g‘ri sozlang:

```js
const cors = require("cors");
app.use(cors({ origin: "*" })); // Faqat devda!
```

---

## 💬 Muallif

**ABDULLOH MAHMUDJANOV** tomonidan yaratilgan — _"Sukunat — eng yaxshi va eng oqilona tanlovdur!!!"_

📬 **Aloqa uchun ijtimoiy sahifalar:**

- [📎 Telegram](https://t.me/@mahmudjanov_2009)
- [📸 Instagram](https://instagram.com/a_mahmudjanov)
- [💻 GitHub](https://github.com/mahmudjanov358)

---

## 📄 Litsenziya

Ushbu loyiha MIT litsenziyasi asosida tarqatiladi.
