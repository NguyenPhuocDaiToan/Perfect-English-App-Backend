const express = require('express');
const validate = require('../../../middlewares/validate');
const { lessonValidation } = require('../../../validations');
const { lessonController } = require('../../../controllers');
const queryMiddleware = require('../../../middlewares/queryMiddleware');

const router = express.Router();

router.get('/', validate(lessonValidation.paginate), queryMiddleware, lessonController.paginate);
router.get('/:id', validate(lessonValidation.getById), lessonController.findById);

module.exports = router;
