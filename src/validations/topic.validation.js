const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object({
    id: Joi.number(),
    title: Joi.string().required(),
    category: Joi.string().required(),
    description: Joi.string(),
    status: Joi.string(),
  }),
};

const paginate = {
  query: Joi.object({
    search: Joi.string(),
    title: Joi.string(),
    category: Joi.string(),
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
    category: Joi.string(),
    description: Joi.string(),
    status: Joi.string(),
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
