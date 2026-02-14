const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createGrammarTopic = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    slug: Joi.string().required(),
    description: Joi.string(),
    level: Joi.string().required(),
    priority: Joi.number(),
    status: Joi.string(),
  }),
};

const getGrammarTopics = {
  query: Joi.object().keys({
    title: Joi.string(),
    level: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getGrammarTopic = {
  params: Joi.object().keys({
    grammarTopicId: Joi.string().custom(objectId),
  }),
};

const updateGrammarTopic = {
  params: Joi.object().keys({
    grammarTopicId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      slug: Joi.string(),
      description: Joi.string(),
      level: Joi.string(),
      priority: Joi.number(),
      status: Joi.string(),
    })
    .min(1),
};

const deleteGrammarTopic = {
  params: Joi.object().keys({
    grammarTopicId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createGrammarTopic,
  getGrammarTopics,
  getGrammarTopic,
  updateGrammarTopic,
  deleteGrammarTopic,
};
