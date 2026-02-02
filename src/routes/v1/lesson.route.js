const BaseRoute = require('../utils/_base.route');
const lessonController = require('../../controllers/lesson.controller');
const lessonValidation = require('../../validations/lesson.validation');

const resource = 'lesson';
const router = new BaseRoute(lessonController, lessonValidation, resource).router;

module.exports = router;
