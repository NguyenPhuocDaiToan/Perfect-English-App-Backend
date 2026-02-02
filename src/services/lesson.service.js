const BaseService = require('../utils/_base.service');
const Lesson = require('../models/lesson.model');

class LessonService extends BaseService {
  constructor() {
    super(Lesson);
  }
}

module.exports = new LessonService();
