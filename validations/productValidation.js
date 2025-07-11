const Joi = require("joi"); // ----Joi Library

exports.postProductValidationSchema = Joi.object({
  name: Joi.string().required().min(3).max(100).messages({
    "string.base": "Name string ko'rinishida bo'lishi kerak!",
    "any.required": "Name bo'sh kiritilishi kerak!",
    "string.min": "Name kamida 3 belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'p 100 belgidan iborat bo'lishi kerak!",
  }),
  description: Joi.string().required().min(10).max(1000).messages({
    "string.base": "Description string ko'rinishida bo'lishi kerak!",
    "any.required": "Description bo'sh kiritilishi kerak!",
    "string.min": "Description kamida 10 belgidan iborat bo'lishi kerak!",
    "string.max": "Description ko'p 1000 belgidan iborat bo'lishi kerak!",
  }),
  photo: Joi.string().required().min(5).max(1000).messages({
    "string.base": "Photo string ko'rinishida bo'lishi kerak!",
    "any.required": "Photo bo'sh kiritilishi kerak!",
    "string.min": "Photo kamida 5 rasmdan iborat bo'lishi kerak!",
    "string.max": "Photo ko'p 1000 rasmdan iborat bo'lishi kerak!",
  }),
  price: Joi.number().required().integer().min(1000).messages({
    "number.base": "Price number ko'rinishida bo'lishi kerak!",
    "any.required": "Price bo'sh kiritilishi kerak!",
    "number.integer": "Price butun son bo'lishi kerak!",
    "number.min": "Price kamida 1000 so'm bo'lishi kerak!",
  }),
  count: Joi.number().required().integer().min(1).max(100).messages({
    "number.base": "Count number ko'rinishida bo'lishi kerak!",
    "any.required": "Count bo'sh kiritilishi kerak!",
    "number.min": "Count kamida 1 ta sondan iborat bo'lishi kerak!",
    "number.max": "Count ko'p 100 ta sondan iborat bo'lishi kerak!",
    "number.integer": "Count butun son bo'lishi kerak!",
  }),
  category_id: Joi.string().required().messages({
    "string.base": "Category ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Category ID bo'sh kiritilishi kerak!",
  }),
  discount_id: Joi.string().required().messages({
    "string.base": "Discount ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Discount ID bo'sh kiritilishi kerak!",
  }),
}); // ----postProductValidationSchema

exports.updateProductValidationSchema =
  exports.postProductValidationSchema.fork(
    Object.keys(exports.postProductValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateProductValidationSchema
