const BaseService = require('../utils/_base.service');
const Question = require('../models/question.model');

class QuestionService extends BaseService {
  constructor() {
    super(Question);
  }
}

module.exports = new QuestionService();
