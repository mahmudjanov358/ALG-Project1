const Joi = require("joi"); // ----Joi Library
const colors = [
  "White",
  "Black",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Purple",
  "Gray",
  "Brown",
  "Pink",
  "Orange",
  "Gold",
  "Silver",
  "Bronze",
  "Beige",
  "Navy Blue",
  "Maroon",
  "Teal",
];
exports.postProduct_VariantValidationSchema = Joi.object({
  product_id: Joi.string().required().messages({
    "string.base": "Product ID string ko'rinishida bo'lishi kerak!",
    "any.required": "Product ID bo'sh kiritilishi kerak!",
  }),
  price: Joi.number().required().integer().min(1000).messages({
    "number.base": "Price number ko'rinishida bo'lishi kerak!",
    "any.required": "Price bo'sh kiritilishi kerak!",
    "number.integer": "Price butun son bo'lishi kerak!",
    "number.min": "Price kamida 1000 so'm bo'lishi kerak!",
  }),
  color: Joi.string()
    .optional()
    .valid(...colors)
    .messages({
      "string.base": "Color string ko'rinishida bo'lishi kerak!",
      "any.only": `Color faqat ${colors.join(", ")} bo'lishi kerak!`,
    }),
}); // ----postProduct_VariantValidationSchema

exports.updateProduct_VariantValidationSchema =
  exports.postProduct_VariantValidationSchema.fork(
    Object.keys(exports.postProduct_VariantValidationSchema.describe().keys),
    (schema) => schema.optional()
  ); // ----updateProduct_VariantValidationSchema
