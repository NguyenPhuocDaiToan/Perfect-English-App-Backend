const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object({
    id: Joi.string().custom(objectId),
    title: Joi.string().required(),
    level: Joi.string().required(),
    status: Joi.string(),
    topics: Joi.array().items(Joi.string().custom(objectId)),
    content: Joi.string(),
    exercise: Joi.string().allow(null, '').custom(objectId),
    isPremium: Joi.boolean(),
  }),
};

const paginate = {
  query: Joi.object({
    search: Joi.string(),
    title: Joi.string(),
    level: Joi.string(),
    status: Joi.string(),
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
    level: Joi.string(),
    status: Joi.string(),
    topics: Joi.array().items(Joi.string().custom(objectId)),
    content: Joi.string(),
    exercise: Joi.string().allow(null, '').custom(objectId),
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
