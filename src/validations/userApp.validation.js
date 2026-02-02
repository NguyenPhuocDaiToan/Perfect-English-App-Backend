const Joi = require('joi');

const createUserApp = {
  body: Joi.object({
    id: Joi.number(),
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().required(),
    status: Joi.string().required(),
    isPremium: Joi.boolean(),
    streak: Joi.number(),
    xp: Joi.number(),
    avatarUrl: Joi.string().uri(),
    createdAt: Joi.date(),
    lastLogin: Joi.date(),
  }),
};

const updateUserApp = {
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    role: Joi.string(),
    status: Joi.string(),
    isPremium: Joi.boolean(),
    streak: Joi.number(),
    xp: Joi.number(),
    avatarUrl: Joi.string().uri(),
    lastLogin: Joi.date(),
  }),
};

module.exports = {
  createUserApp,
  updateUserApp,
};
