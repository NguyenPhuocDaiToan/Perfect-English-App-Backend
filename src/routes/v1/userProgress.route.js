const express = require('express');
const userProgressController = require('../../controllers/userProgress.controller');

const router = express.Router();

router
  .route('/')
  .post(userProgressController.createUserProgress)
  .get(userProgressController.listUserProgress);

router
  .route('/:id')
  .get(userProgressController.getUserProgress)
  .patch(userProgressController.updateUserProgress)
  .delete(userProgressController.deleteUserProgress);

module.exports = router;
