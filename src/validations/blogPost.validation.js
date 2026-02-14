const Joi = require('joi');
const { objectId } = require('./custom.validation');

const create = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    slug: Joi.string().allow('', null),
    summary: Joi.string().allow('', null),
    content: Joi.string().required(),
    thumbnail: Joi.string().allow('', null),
    coverImage: Joi.string().allow('', null),
    coverImageAlt: Joi.string().allow('', null),

    topic: Joi.string().custom(objectId).allow('', null),
    lesson: Joi.string().custom(objectId).allow('', null),

    categories: Joi.array().items(Joi.string().custom(objectId)).default([]),
    tags: Joi.array().items(Joi.string()).default([]),

    status: Joi.string().valid('Draft', 'Published', 'Archived').default('Draft'),

    seoTitle: Joi.string().allow('', null),
    seoDescription: Joi.string().allow('', null),

    publishedAt: Joi.date().allow('', null),
  }),
};

const paginate = {
  query: Joi.object().keys({
    search: Joi.string().allow('', null),
    title: Joi.string().allow('', null),
    categorySlug: Joi.string().allow('', null),
    category: Joi.string().custom(objectId).allow('', null),
    tag: Joi.string().custom(objectId).allow('', null),
    status: Joi.string().valid('Draft', 'Published', 'Archived').allow('', null),
    sortBy: Joi.string().allow('', null),
    select: Joi.string().allow('', null),
    limit: Joi.number().integer().min(1),
    page: Joi.number().integer().min(1),
    populate: Joi.string().allow('', null),
    createdBy: Joi.string().custom(objectId).allow('', null),
  }),
};

const findById = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const updateById = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      slug: Joi.string().allow('', null),
      summary: Joi.string().allow('', null),
      content: Joi.string(),
      thumbnail: Joi.string().allow('', null),
      coverImage: Joi.string().allow('', null),
      coverImageAlt: Joi.string().allow('', null),

      topic: Joi.string().custom(objectId).allow('', null),
      lesson: Joi.string().custom(objectId).allow('', null),

      categories: Joi.array().items(Joi.string().custom(objectId)),
      tags: Joi.array().items(Joi.string()),

      status: Joi.string().valid('Draft', 'Published', 'Archived'),
      isFeatured: Joi.boolean(),
      isPinned: Joi.boolean(),

      seoTitle: Joi.string().allow('', null),
      seoDescription: Joi.string().allow('', null),
      publishedAt: Joi.date().allow('', null),

      displayPages: Joi.array().items(Joi.string().valid('sharing', 'community')),
    })
    .min(1),
};

const deleteById = {
  params: Joi.object().keys({
    id: Joi.string().custom(objectId).required(),
  }),
};

const deleteManyById = {
  params: Joi.object().keys({
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
