const express = require('express');
const questionController = require('../../../controllers/question.controller');

const router = express.Router();

router.get('/batch', questionController.getQuestionsByIds);

module.exports = router;
