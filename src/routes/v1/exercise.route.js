const BaseRoute = require('../utils/_base.route');
const exerciseController = require('../../controllers/exercise.controller');
const exerciseValidation = require('../../validations/exercise.validation');

const resource = 'exercise';
const router = new BaseRoute(exerciseController, exerciseValidation, resource).router;

module.exports = router;
