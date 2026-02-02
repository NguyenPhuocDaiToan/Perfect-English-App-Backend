const Joi = require('joi');

const createExercise = {
  body: Joi.object({
    id: Joi.number(),
    title: Joi.string().required(),
    questionIds: Joi.array().items(Joi.number()),
    timeLimit: Joi.number(),
    difficulty: Joi.string(),
    topicIds: Joi.array().items(Joi.number()),
    lessonIds: Joi.array().items(Joi.number()),
  }),
};

const updateExercise = {
  body: Joi.object({
    title: Joi.string(),
    questionIds: Joi.array().items(Joi.number()),
    timeLimit: Joi.number(),
    difficulty: Joi.string(),
    topicIds: Joi.array().items(Joi.number()),
    lessonIds: Joi.array().items(Joi.number()),
  }),
};

module.exports = {
  createExercise,
  updateExercise,
};
