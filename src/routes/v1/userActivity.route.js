const BaseRoute = require('../../utils/_base.route');
const { userActivityController } = require('../../controllers/index');
// const { userActivityValidation } = require('../../validations/index');

function list(req, res, next) {
  const { search } = req.query;
  if (search) {
    if (!req.query.$or) {
      req.query.$or = [];
    }
    // Example: search by action or details
    req.query.$or.push({ action: { $regex: search, $options: 'i' } });
    req.query.$or.push({ details: { $regex: search, $options: 'i' } });
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

class UserActivityRoute extends BaseRoute {
  constructor() {
    const middlewares = {
      list: [list],
      create: [create],
      findById: [findById],
      updateById: [updateById],
      deleteById: [deleteById],
      deleteManyById: [deleteManyById],
    };
    super(userActivityController, {}, 'userActivity', middlewares);
  }
}

module.exports = new UserActivityRoute().getRouter();
