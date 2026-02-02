const Joi = require('joi');

const createQuestion = {
  body: Joi.object({
    id: Joi.number(),
    type: Joi.string().required(),
    topic: Joi.string().required(),
    difficulty: Joi.string().required(),
    questionText: Joi.string().required(),
    options: Joi.array().items(Joi.object({ text: Joi.string(), isCorrect: Joi.boolean() })),
    correctAnswer: Joi.boolean(),
    correctAnswerText: Joi.string(),
    explanation: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  }),
};

const updateQuestion = {
  body: Joi.object({
    type: Joi.string(),
    topic: Joi.string(),
    difficulty: Joi.string(),
    questionText: Joi.string(),
    options: Joi.array().items(Joi.object({ text: Joi.string(), isCorrect: Joi.boolean() })),
    correctAnswer: Joi.boolean(),
    correctAnswerText: Joi.string(),
    explanation: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  }),
};

module.exports = {
  createQuestion,
  updateQuestion,
};
