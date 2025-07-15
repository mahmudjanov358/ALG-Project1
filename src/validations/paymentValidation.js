const Joi = require("joi"); // ----Joi Library
const payment_options = [
  "Naqd",
  "Karta",
  "Click",
  "Payme",
  "UzCard",
  "Humo",
  "Apelsin",
  "Bank_O'tkazma",
  "Paypal",
  "Visa",
  "MasterCard",
  "Unionpay",
  "Cryptocurrency",
  "WebMoney",
  "Qiwi",
  "Yandex_Money",
];
exports.postPaymentValidationSchema = Joi.object({
  name: Joi.string()
    .required()
    .valid(...payment_options)
    .messages({
      "string.base": "Name string ko'rinishida bo'lishi kerak!",
      "any.required": "Name bo'sh bo'lishi mumkin emas!",
      "any.only": `Name quyidagi qiymatlardan biri bo'lishi kerak: ${payment_options.join(
        ", "
      )}`,
    }),
}); // ----postPaymentValidationSchema

exports.updatePaymentValidationSchema =
  exports.postPaymentValidationSchema.fork(
    Object.keys(exports.postPaymentValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updatePaymentValidationSchema
