const BaseService = require('../utils/_base.service');
const { UserActivity } = require('../models');

class UserActivityService extends BaseService {
  constructor() {
    super(UserActivity);
  }
}

module.exports = new UserActivityService();
