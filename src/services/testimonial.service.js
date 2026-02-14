const BaseService = require('../utils/_base.service');
const { Testimonial } = require('../models');

class TestimonialService extends BaseService {
  constructor() {
    super(Testimonial);
  }
}

module.exports = new TestimonialService();
