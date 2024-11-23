import joi from "joi-oid";

const schema = joi.object({
    name: joi.string().min(2).required().messages({
        'string.base': 'El nombre debe ser una cadena de texto.',
        'string.min': 'El nombre debe tener al menos 2 caracteres.',
        'any.required': 'El nombre es obligatorio.'
    }),

    lastName: joi.string().min(2).required().messages({
        'string.base': 'El apellido debe ser una cadena de texto.',
        'string.min': 'El apellido debe tener al menos 2 caracteres.',
        'any.required': 'El apellido es obligatorio.'
    }),

    email: joi.string().email().required().messages({
        'string.base': 'El correo electrónico debe ser una cadena de texto.',
        'string.email': 'El correo electrónico debe ser válido.',
        'any.required': 'El correo electrónico es obligatorio.'
    }),

    password: joi.string().min(3).required().pattern(/^(?=.*[a-zA-Z]|\d)/).messages({
        'string.base': 'La contraseña debe ser una cadena de texto.',
        'string.min': 'La contraseña debe tener al menos 3 caracteres.',
        'string.pattern.base': 'La contraseña debe contener al menos un número o una letra.',
        'any.required': 'La contraseña es obligatoria.'
    }),

    photoUrl: joi.string().uri().allow(null).messages({
        'string.base': 'La URL de la foto debe ser una cadena de texto.',
        'string.uri': 'La URL de la foto debe ser válida.',
    }),

    country: joi.string().min(2).required().messages({
        'string.base': 'El país debe ser una cadena de texto.',
        'string.min': 'El país debe tener al menos 2 caracteres.',
        'any.required': 'El país es obligatorio.'
    })
});

export default schema;
