const Joi = require('joi');

const createLesson = {
  body: Joi.object({
    id: Joi.number(),
    title: Joi.string().required(),
    level: Joi.string().required(),
    status: Joi.string(),
    topicIds: Joi.array().items(Joi.number()),
    content: Joi.string(),
    exerciseId: Joi.number(),
    isPremium: Joi.boolean(),
  }),
};

const updateLesson = {
  body: Joi.object({
    title: Joi.string(),
    level: Joi.string(),
    status: Joi.string(),
    topicIds: Joi.array().items(Joi.number()),
    content: Joi.string(),
    exerciseId: Joi.number(),
    isPremium: Joi.boolean(),
  }),
};

module.exports = {
  createLesson,
  updateLesson,
};
