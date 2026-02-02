const BaseController = require('../utils/_base.controller');
const questionService = require('../services/question.service');

class QuestionController extends BaseController {
  constructor() {
    super(questionService);
  }
}

module.exports = new QuestionController();
