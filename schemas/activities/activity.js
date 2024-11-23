import joi from 'joi';

 const schema = joi.object({
    name: joi.string().trim().min(3).max(100).required().messages({
        'string.base': `"name" should be a string`,
        'string.min': `"name" should have at least 3 characters`,
        'string.max': `"name" should have less than 100 characters`,
        'any.required': `"name" is required`
    }),
    description: joi.string().trim().min(10).max(500).required().messages({
        'string.base': `"description" should be a string`,
        'string.min': `"description" should have at least 10 characters`,
        'string.max': `"description" should have less than 500 characters`,
        'any.required': `"description" is required`
    }),
    location: joi.string().trim().min(3).max(100).required().messages({
        'string.base': `"location" should be a string`,
        'string.min': `"location" should have at least 3 characters`,
        'string.max': `"location" should have less than 100 characters`,
        'any.required': `"location" is required`
    }),
    schedule: joi.string().valid('Morning', 'Afternoon', 'Night', 'All day', 'Evening', 'Full Day').required().messages({
        'string.base': `"schedule" should be a string`,
        'any.only': `"schedule" should be one of the following values: Morning, Afternoon, Night, All day, Evening, Full Day`,
        'any.required': `"schedule" is required`
    }),
    city: joi.string().hex().length(24).required().messages({
        'string.base': `"city" should be a string`,
        'string.hex': `"city" should be a valid ObjectId`,
        'string.length': `"city" should have a length of 24 characters`,
        'any.required': `"city" is required`
    }),
    itineraries: joi.array().items(joi.string().hex().length(24)).optional().messages({
        'array.base': `"itineraries" should be an array of valid ObjectIds`
    }),
    image: joi.string().uri().required().messages({
        'string.base': `"image" should be a string`,
        'string.uri': `"image" should be a valid URL`,
        'any.required': `"image" is required`
    })
});
 export default schema;