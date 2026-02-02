const BaseController = require('../utils/_base.controller');
const topicService = require('../services/topic.service');

class TopicController extends BaseController {
  constructor() {
    super(topicService);
  }
}

module.exports = new TopicController();
