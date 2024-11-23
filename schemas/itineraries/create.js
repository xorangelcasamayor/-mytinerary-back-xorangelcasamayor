import joi from "joi-oid";

 const schema = joi.object({
  userName: joi.string().min(3).max(50).required().messages({
    'string.base': `"userName" should be a string`,
    'string.min': `"userName" should have at least 3 characters`,
    'string.max': `"userName" should have less than 50 characters`,
    'any.required': `"userName" is required`,
  }),
  userPhoto: joi.string().uri().required().messages({
    'string.base': `"userPhoto" should be a string`,
    'string.uri': `"userPhoto" should be a valid URL`,
    'any.required': `"userPhoto" is required`,
  }),
  price: joi.number().min(1).max(5).required().messages({
    'number.base': `"price" should be a number`,
    'number.min': `"price" should be at least 1`,
    'number.max': `"price" should be at most 5`,
    'any.required': `"price" is required`,
  }),
  duration: joi.number().min(1).required().messages({
    'number.base': `"duration" should be a number`,
    'number.min': `"duration" should be at least 1`,
    'any.required': `"duration" is required`,
  }),
  description: joi.string().min(10).max(500).required().messages({
    'string.base': `"description" should be a string`,
    'string.min': `"description" should have at least 10 characters`,
    'string.max': `"description" should have less than 500 characters`,
    'any.required': `"description" is required`,
  }),
  hashtags: joi.array().items(Joi.string()).optional().messages({
    'array.base': `"hashtags" should be an array of strings`,
  }),
  city: joi.string().hex().length(24).required().messages({
    'string.base': `"city" should be a string`,
    'string.hex': `"city" should be a valid ObjectId`,
    'string.length': `"city" should have a length of 24 characters`,
    'any.required': `"city" is required`,
  }),

photo: joi.string().uri().required().messages({
  'string.base': `"photo" should be a string`,
  'string.uri': `"photo" should be a valid URL`,
  'any.required': `"photo" is required`,

})  
});

export default schema;