const BaseService = require('../utils/_base.service');
const Exercise = require('../models/exercise.model');

class ExerciseService extends BaseService {
  constructor() {
    super(Exercise);
  }
}

module.exports = new ExerciseService();
