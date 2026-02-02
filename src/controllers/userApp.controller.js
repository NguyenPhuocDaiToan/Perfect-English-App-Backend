const BaseController = require('../utils/_base.controller');
const userAppService = require('../services/userApp.service');

class UserAppController extends BaseController {
  constructor() {
    super(userAppService);
  }
}

module.exports = new UserAppController();
