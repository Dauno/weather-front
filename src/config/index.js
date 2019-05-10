const joi = require('@hapi/joi');

const { value: config } = joi.object().keys({
  API_URL: joi.string(),
}).validate(process.env, { stripUnknown: true })


module.exports = config;
