const Joi = require("joi"); // ----Joi Library

exports.postAdminValidationSchema = Joi.object({
  name: Joi.string().required().min(2).max(30).messages({
    "string.base": "Name string ko'rinishida bo'lishi kerak!",
    "string.empty": "Name kiritilishi shart!",
    "string.min": "Name kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Name ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Name kiritilishi shart!",
  }),
  lastName: Joi.string().required().min(2).max(30).messages({
    "string.base": "Last name string ko'rinishida bo'lishi kerak!",
    "string.empty": "Last name kiritilishi shart!",
    "string.min": "Last name kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Last name ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Last name kiritilishi shart!",
  }),
  email: Joi.string().required().email().min(2).max(30).messages({
    "string.base": "Email string ko'rinishida bo'lishi kerak!",
    "string.empty": "Email kiritilishi shart!",
    "string.email": "Email formati to'g'ri bo'lishi kerak!",
    "string.min": "Email kamida 2ta belgidan iborat bo'lishi kerak!",
    "string.max": "Email ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Email kiritilishi shart!",
  }),
  password: Joi.string().required().min(8).max(30).messages({
    "string.base": "Password string ko'rinishida bo'lishi kerak!",
    "string.empty": "Password kiritilishi shart!",
    "string.min": "Password kamida 8ta belgidan iborat bo'lishi kerak!",
    "string.max": "Password ko'pida 30ta belgidan iborat bo'lishi kerak!",
    "any.required": "Password kiritilishi shart!",
  }),
  is_active: Joi.boolean().required().valid(true, false).messages({
    "boolean.base": "Is active boolean ko'rinishida bo'lishi kerak!",
    "any.required": "Is active kiritilishi shart!",
    "any.only": "Is active faqat true yoki false bo'lishi kerak!",
  }),
}); // ----postAdminValidationSchema

exports.loginAdminValidationSchema = exports.postAdminValidationSchema.fork(
  Object.keys(exports.postAdminValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----loginAdminValidationSchema

exports.updateAdminValidationSchema = exports.postAdminValidationSchema.fork(
  Object.keys(exports.postAdminValidationSchema.describe().keys),
  (schema) => schema.optional()
); // ----updateAdminValidationSchema
