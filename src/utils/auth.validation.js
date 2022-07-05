const Joi = require('joi');

const registerValidator = (data) => {
  const rule = Joi.object({
    name: Joi.string().min(6).max(100).required(),
    password: Joi.string()
      .pattern(/^[a-zA-Z0-9]{6,20}$/)
      .required(),
    role: Joi.string().min(6).max(100),
    email: Joi.string().min(6).max(100).required(),
  });
  return rule.validate(data);
};

module.exports = registerValidator;
