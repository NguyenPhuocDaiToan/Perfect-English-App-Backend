const BaseRoute = require('../utils/_base.route');
const questionController = require('../../controllers/question.controller');
const questionValidation = require('../../validations/question.validation');

const resource = 'question';
const router = new BaseRoute(questionController, questionValidation, resource).router;

module.exports = router;
