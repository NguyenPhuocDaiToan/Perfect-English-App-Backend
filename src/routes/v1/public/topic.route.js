const express = require('express');
const validate = require('../../../middlewares/validate');
const { topicValidation } = require('../../../validations');
const { topicController } = require('../../../controllers');
const queryMiddleware = require('../../../middlewares/queryMiddleware');

const router = express.Router();

router.get('/', validate(topicValidation.paginate), queryMiddleware, topicController.paginate);
router.get('/:id', validate(topicValidation.getById), topicController.findById);

module.exports = router;
