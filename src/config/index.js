const joi = require('@hapi/joi');

const { value: config } = joi.object().keys({
  PORT: joi.number(),
  API_URL: joi.string(),
}).validate(process.env, { stripUnknown: true })


module.exports = config;
