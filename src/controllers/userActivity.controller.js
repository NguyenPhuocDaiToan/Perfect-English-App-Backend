const BaseController = require('../utils/_base.controller');
const { userActivityService } = require('../services');

class UserActivityController extends BaseController {
  constructor() {
    super(userActivityService);
  }
}

module.exports = new UserActivityController();
