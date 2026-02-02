const BaseService = require('../utils/_base.service');
const Topic = require('../models/topic.model');

class TopicService extends BaseService {
  constructor() {
    super(Topic);
  }
}

module.exports = new TopicService();
