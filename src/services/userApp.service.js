const BaseService = require('../utils/_base.service');
const UserApp = require('../models/userApp.model');
class UserAppService extends BaseService {
  constructor() {
    super(UserApp);
  }
}

module.exports = new UserAppService();
