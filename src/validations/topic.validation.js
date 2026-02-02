const Joi = require('joi');

const createTopic = {
  body: Joi.object({
    id: Joi.number(),
    title: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string(),
    status: Joi.string(),
  }),
};

const updateTopic = {
  body: Joi.object({
    title: Joi.string(),
    category: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
  }),
};

module.exports = {
  createTopic,
  updateTopic,
};
