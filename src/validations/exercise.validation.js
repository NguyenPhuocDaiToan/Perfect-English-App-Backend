const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object({
    id: Joi.string().custom(objectId),
    title: Joi.string().required(),
    description: Joi.string().allow('', null),
    questions: Joi.array().items(Joi.string().custom(objectId)),
    timeLimit: Joi.number(),
    difficulty: Joi.string(),
    topics: Joi.array().items(Joi.string().custom(objectId)),
    lessons: Joi.array().items(Joi.string().custom(objectId)),
    status: Joi.string().valid('Published', 'Draft'),
    isPremium: Joi.boolean(),
  }),
};

const paginate = {
  query: Joi.object({
    search: Joi.string(),
    title: Joi.string(),
    status: Joi.string(),
    difficulty: Joi.string(),
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
    title: Joi.string(),
    description: Joi.string().allow('', null),
    questions: Joi.array().items(Joi.string().custom(objectId)),
    timeLimit: Joi.number(),
    difficulty: Joi.string(),
    topics: Joi.array().items(Joi.string().custom(objectId)),
    lessons: Joi.array().items(Joi.string().custom(objectId)),
    status: Joi.string().valid('Published', 'Draft'),
    isPremium: Joi.boolean(),
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
