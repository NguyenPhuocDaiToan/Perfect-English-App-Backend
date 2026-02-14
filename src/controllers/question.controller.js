const BaseController = require('../utils/_base.controller');
const questionService = require('../services/question.service');

class QuestionController extends BaseController {
  constructor() {
    super(questionService);
    this.getQuestionsByIds = this.getQuestionsByIds.bind(this);
  }

  async getQuestionsByIds(req, res) {
    const ids = req.query.ids ? req.query.ids.split(',') : [];
    if (!ids.length) {
      return res.status(200).json([]);
    }
    const questions = await this.service.findAll({ _id: { $in: ids } }, { limit: ids.length });
    res.status(200).json(questions);
  }
}

module.exports = new QuestionController();
