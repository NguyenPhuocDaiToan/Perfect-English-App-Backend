const BaseRoute = require('../utils/_base.route');
const topicController = require('../../controllers/topic.controller');
const topicValidation = require('../../validations/topic.validation');

const resource = 'topic';
const router = new BaseRoute(topicController, topicValidation, resource).router;

module.exports = router;
