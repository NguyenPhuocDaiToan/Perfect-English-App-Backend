const BaseController = require('../utils/_base.controller');
const lessonService = require('../services/lesson.service');

class LessonController extends BaseController {
  constructor() {
    super(lessonService);
  }
}

module.exports = new LessonController();
