const BaseRoute = require('../../utils/_base.route');
const topicController = require('../../controllers/topic.controller');
const topicValidation = require('../../validations/topic.validation');

function list(req, res, next) {
  const { search } = req.query;
  if (search) {
    if (!req.query.$or) {
      req.query.$or = [];
    }
    req.query.$or.push({ title: { $regex: search, $options: 'i' } });
    req.query.$or.push({ description: { $regex: search, $options: 'i' } });
    delete req.query.search;
  }
  next();
}

function create(req, res, next) {
  next();
}

function findById(req, res, next) {
  next();
}

function updateById(req, res, next) {
  next();
}

function deleteById(req, res, next) {
  next();
}

function deleteManyById(req, res, next) {
  next();
}

class TopicRoute extends BaseRoute {
  constructor() {
    const middlewares = {
      list: [list],
      create: [create],
      findById: [findById],
      updateById: [updateById],
      deleteById: [deleteById],
      deleteManyById: [deleteManyById],
    };
    super(topicController, topicValidation, 'topic', middlewares);
  }
}

module.exports = new TopicRoute().getRouter();
