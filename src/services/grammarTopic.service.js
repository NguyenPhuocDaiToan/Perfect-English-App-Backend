const BaseService = require('../utils/_base.service');
const { GrammarTopic } = require('../models');

class GrammarTopicService extends BaseService {
  constructor() {
    super(GrammarTopic);
  }
}

module.exports = new GrammarTopicService();
