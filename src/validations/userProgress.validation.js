const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object({
    exercise: Joi.string().required().custom(objectId),
    userId: Joi.string().required().custom(objectId),
    status: Joi.string().valid('In Progress', 'Completed').required(),
    bestScore: Joi.number().min(0).max(100),
    lastPlayedAt: Joi.date(),
  }),
};

const paginate = {
  query: Joi.object({
    search: Joi.string(),
    exercise: Joi.string().custom(objectId),
    userId: Joi.string().custom(objectId),
    status: Joi.string().valid('In Progress', 'Completed'),
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
    status: Joi.string().valid('In Progress', 'Completed'),
    bestScore: Joi.number().min(0).max(100),
    lastPlayedAt: Joi.date(),
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
