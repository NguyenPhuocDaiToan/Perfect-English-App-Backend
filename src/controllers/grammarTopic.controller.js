const BaseController = require('../utils/_base.controller');
const { grammarTopicService } = require('../services');

class GrammarTopicController extends BaseController {
  constructor() {
    super(grammarTopicService);
  }
}

module.exports = new GrammarTopicController();
