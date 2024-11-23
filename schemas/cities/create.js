
import joi from "joi-oid";


 const schema = joi.object({
  city: joi.string().min(3).max(50).required().messages({
    'string.base': `"city" should be a string`,
    'string.min': `"city" should have at least 3 characters`,
    'string.max': `"city" should have less than 50 characters`,
    'any.required': `"city" is required`,
  }),
  country: joi.string().min(3).max(50).required().messages({
    'string.base': `"country" should be a string`,
    'string.min': `"country" should have at least 3 characters`,
    'string.max': `"country" should have less than 50 characters`,
    'any.required': `"country" is required`,
  }),
  photo: joi.string().uri().required().messages({
    'string.base': `"photo" should be a string`,
    'string.uri': `"photo" should be a valid URL`,
    'any.required': `"photo" is required`,
  }),
  description: joi.string().min(10).max(500).required().messages({
    'string.base': `"description" should be a string`,
    'string.min': `"description" should have at least 10 characters`,
    'string.max': `"description" should have less than 500 characters`,
    'any.required': `"description" is required`,
  }),
  foundation: joi.date().less('now').required().messages({
    'date.base': `"foundation" should be a valid date`,
    'date.less': `"foundation" cannot be in the future`,
    'any.required': `"foundation" is required`,
  }),
  population: joi.number().min(0).required().messages({
    'number.base': `"population" should be a number`,
    'number.min': `"population" should be a positive number`,
    'any.required': `"population" is required`,
  }),
  likes: joi.number().min(0).optional().messages({
    'number.base': `"likes" should be a number`,
    'number.min': `"likes" should be a positive number`,
  }),
});

export default schema