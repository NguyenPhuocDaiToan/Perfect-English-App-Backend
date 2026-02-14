const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object({
    type: Joi.string().required(),
    topic: Joi.string().required(),
    subTopic: Joi.string().required(),
    difficulty: Joi.string().required(),
    questionText: Joi.string().required(),
    options: Joi.array().items(Joi.object({ text: Joi.string(), isCorrect: Joi.boolean() })),
    correctAnswer: Joi.boolean(),
    correctAnswerText: Joi.string(),
    explanation: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  }),
};

const paginate = {
  query: Joi.object({
    search: Joi.string(),
    type: Joi.string(),
    topic: Joi.string(),
    subTopic: Joi.string(),
    difficulty: Joi.string(),
    questionText: Joi.string(),
    sortBy: Joi.string().allow('', null),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
    populate: Joi.string().allow('', null),
  }),
};

const findById = {
  params: Joi.object({
    id: Joi.string().required().custom(objectId),
  }),
};

const updateById = {
  params: Joi.object({
    id: Joi.string().required().custom(objectId),
  }),
  body: Joi.object({
    type: Joi.string(),
    topic: Joi.string(),
    subTopic: Joi.string(),
    difficulty: Joi.string(),
    questionText: Joi.string(),
    options: Joi.array().items(Joi.object({ text: Joi.string(), isCorrect: Joi.boolean() })),
    correctAnswer: Joi.boolean(),
    correctAnswerText: Joi.string(),
    explanation: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  }).min(1),
};

const deleteById = {
  params: Joi.object({
    id: Joi.string().required().custom(objectId),
  }),
};

const deleteManyById = {
  params: Joi.object({
    ids: Joi.string().required(),
  }),
};

module.exports = {
  create,
  paginate,
  findById,
  updateById,
  deleteById,
  deleteManyById,
};
