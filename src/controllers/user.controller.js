const httpStatus = require('http-status');
const BaseController = require('../utils/_base.controller');
const { userService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const { OK } = httpStatus;
class UserController extends BaseController {
  constructor() {
    super(userService);
    this.changePassword = catchAsync(this.changePassword.bind(this));
    this.getLeaderboard = catchAsync(this.getLeaderboard.bind(this));
  }

  // POST /api/users/me/change-password
  async changePassword(req, res) {
    const userId = req.user.id;

    const { currentPassword, newPassword } = req.body;

    await this.service.changePassword(userId, currentPassword, newPassword);
    return res.status(OK).json({ message: 'Password changed' });
  }

  // GET /api/users/leaderboard
  async getLeaderboard(req, res) {
    const limit = 10;
    // Fetch top 10 users sort by xp desc
    const leaderboard = await this.service.queryUsers(
      { role: 'Student', status: 'Active' },
      { sortBy: 'xp:desc', limit, page: 1 }
    );
    return res.status(OK).send(leaderboard.results);
  }
}

module.exports = new UserController();
