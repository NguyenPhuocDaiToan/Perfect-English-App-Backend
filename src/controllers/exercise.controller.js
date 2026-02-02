const BaseController = require('../utils/_base.controller');
const exerciseService = require('../services/exercise.service');

class ExerciseController extends BaseController {
  constructor() {
    super(exerciseService);
  }
}

module.exports = new ExerciseController();
