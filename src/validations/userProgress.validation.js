const Joi = require('joi');

const createUserProgress = {
  body: Joi.object({
    exerciseId: Joi.number().required(),
    userId: Joi.number().required(),
    status: Joi.string().valid('In Progress', 'Completed').required(),
    bestScore: Joi.number().min(0).max(100),
    lastPlayedAt: Joi.date(),
  }),
};

const updateUserProgress = {
  body: Joi.object({
    status: Joi.string().valid('In Progress', 'Completed'),
    bestScore: Joi.number().min(0).max(100),
    lastPlayedAt: Joi.date(),
  }),
};

module.exports = {
  createUserProgress,
  updateUserProgress,
};
