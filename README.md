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
├── node_modules/            # NPM paketlari
├── src/                     # Asosiy manba kodi
│   ├── configs/             # Konfiguratsiyalar (masalan, db.js, swagger.js, app config)
│   ├── controllers/         # Business logika, CRUD funksiyalar
│   ├── middlewares/         # Middleware funksiyalar (auth, error handler va h.k.)
│   ├── models/              # Mongoose yoki Sequelize modellari
│   ├── routers/             # Routerlar (index.js, user.js va h.k.)
│   └── validations/         # Joi yoki Zod validatsiya sxemalari
├── .env                     # Maxfiy ma'lumotlar (token, db uri)
├── .gitignore               # Gitga qo‘shilmaydigan fayllar
├── index.js                 # Kirish nuqtasi (app yaratib, serverni ishga tushiradi)
├── package-lock.json        # NPM lockfile (versiyalarni qattiq belgilaydi)
├── package.json             # Loyihaning metadata va dependencies
└── README.md                # Loyihani tushuntiruvchi fayl
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
npm i bcrypt body-parser cors dotenv express joi jsonwebtoken mongoose nodemon swagger-jsdoc swagger-ui-express
```

3. **Serverni ishga tushurish:**

```bash
npm run go        # yoki
npm run dev       # yoki
npm start         # yoki
node index.js
```

---

## 📌 Swagger API hujjatlari

👉 Swagger UI’ga kirish uchun:

```
http://localhost:2000/api-docs
```

U yerda har bir endpointni test qilishingiz mumkin (`CREATE`, `READ`, `UPDATE`, `DELETE`).

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

**ABDULLOH MAHMUDJANOV** tomonidan yaratilgan — **_"Backend Project1 loyihasi"_**

---

✨ Muallif so‘zi:
**_“ٱلصَّمْتُ هُوَ ٱلْخِيَارُ ٱلْأَفْضَلُ وَٱلْأَكْثَرُ حِكْمَةً!!!”_**
**_“Sukunat — eng yaxshi va eng oqilona tanlovdur!!!”_**

📬 **Aloqa uchun ijtimoiy sahifalar:**

- [<img src="https://cdn.simpleicons.org/telegram/27A7E7" width="16" height="16" /> Telegram](https://t.me/mahmudjanov_2009)
- [<img src="https://cdn.simpleicons.org/youtube/FF0000" width="16" height="16" /> YouTube](https://www.youtube.com/@Front-endBack-end/UCWuJde129M1sMZsVdrWGdmw)
- [<img src="https://cdn.simpleicons.org/instagram/E4405F" width="16" height="16" /> Instagram](https://instagram.com/a_mahmudjanov)
- [<img src="https://cdn.simpleicons.org/github/999999" width="16" height="16" /> GitHub](https://github.com/mahmudjanov358)

---

## 📄 Litsenziya

Ushbu loyiha MIT litsenziyasi asosida tarqatiladi.
