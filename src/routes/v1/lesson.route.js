const BaseRoute = require('../../utils/_base.route');
const lessonController = require('../../controllers/lesson.controller');
const lessonValidation = require('../../validations/lesson.validation');

function list(req, res, next) {
  const { search } = req.query;
  if (search) {
    if (!req.query.$or) {
      req.query.$or = [];
    }
    req.query.$or.push({ title: { $regex: search, $options: 'i' } });
    req.query.$or.push({ content: { $regex: search, $options: 'i' } });
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

class LessonRoute extends BaseRoute {
  constructor() {
    const middlewares = {
      list: [list],
      create: [create],
      findById: [findById],
      updateById: [updateById],
      deleteById: [deleteById],
      deleteManyById: [deleteManyById],
    };
    super(lessonController, lessonValidation, 'lesson', middlewares);
  }
}

module.exports = new LessonRoute().getRouter();
