const BaseController = require('../utils/_base.controller');
const { testimonialService } = require('../services');

class TestimonialController extends BaseController {
  constructor() {
    super(testimonialService);
  }
}

module.exports = new TestimonialController();
