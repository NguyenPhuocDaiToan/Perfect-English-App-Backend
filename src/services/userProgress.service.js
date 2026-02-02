const BaseService = require('../utils/_base.service');
const UserProgress = require('../models/userProgress.model');

class UserProgressService extends BaseService {
  constructor() {
    super(UserProgress);
  }
}

module.exports = new UserProgressService();
