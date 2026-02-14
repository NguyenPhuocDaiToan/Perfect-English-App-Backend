const BaseRoute = require('../../utils/_base.route');
const testimonialController = require('../../controllers/testimonial.controller');
const testimonialValidation = require('../../validations/testimonial.validation');

function list(req, res, next) {
  const { search } = req.query;
  if (search) {
    if (!req.query.$or) {
      req.query.$or = [];
    }
    req.query.$or.push({ quote: { $regex: search, $options: 'i' } });
    req.query.$or.push({ author: { $regex: search, $options: 'i' } });
    req.query.$or.push({ location: { $regex: search, $options: 'i' } });
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

class TestimonialRoute extends BaseRoute {
  constructor() {
    const middlewares = {
      list: [list],
      create: [create],
      findById: [findById],
      updateById: [updateById],
      deleteById: [deleteById],
      deleteManyById: [deleteManyById],
    };
    super(testimonialController, testimonialValidation, 'testimonial', middlewares);
  }
}

module.exports = new TestimonialRoute().getRouter();
