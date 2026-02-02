const BaseController = require('../utils/_base.controller');
const userProgressService = require('../services/userProgress.service');

class UserProgressController extends BaseController {
  constructor() {
    super(userProgressService);
  }
}

module.exports = new UserProgressController();
