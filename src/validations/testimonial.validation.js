const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createTestimonial = {
  body: Joi.object().keys({
    quote: Joi.string().required(),
    author: Joi.string().required(),
    location: Joi.string(),
    avatar: Joi.string(),
    priority: Joi.number(),
    isActive: Joi.boolean(),
  }),
};

const getTestimonials = {
  query: Joi.object().keys({
    author: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getTestimonial = {
  params: Joi.object().keys({
    testimonialId: Joi.string().custom(objectId),
  }),
};

const updateTestimonial = {
  params: Joi.object().keys({
    testimonialId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      quote: Joi.string(),
      author: Joi.string(),
      location: Joi.string(),
      avatar: Joi.string(),
      priority: Joi.number(),
      isActive: Joi.boolean(),
    })
    .min(1),
};

const deleteTestimonial = {
  params: Joi.object().keys({
    testimonialId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createTestimonial,
  getTestimonials,
  getTestimonial,
  updateTestimonial,
  deleteTestimonial,
};
