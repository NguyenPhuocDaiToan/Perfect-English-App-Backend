const express = require('express');
const validate = require('../../../middlewares/validate');
const { exerciseValidation } = require('../../../validations');
const { exerciseController } = require('../../../controllers');
const queryMiddleware = require('../../../middlewares/queryMiddleware');

const router = express.Router();

router.get('/', validate(exerciseValidation.paginate), queryMiddleware, exerciseController.paginate);
router.get('/:id', validate(exerciseValidation.getById), exerciseController.findById);

module.exports = router;
