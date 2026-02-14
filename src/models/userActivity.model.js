const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const { Schema } = mongoose;

const userActivitySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    action: {
      type: String, // 'Login', 'Register', 'View Content', etc.
      required: true,
    },
    target: {
      type: String, // 'Web App', 'Lesson 1', etc.
      default: 'System',
    },
    status: {
      type: String, // 'Success', 'Failed', 'Warning'
      default: 'Success',
    },
    details: {
      type: String,
    },
    ipAddress: {
      type: String,
    },
    userAgent: {
      type: String,
    },
  },
  {
    timestamps: true, // createdAt will serve as the timestamp
  }
);

userActivitySchema.plugin(toJSON);
userActivitySchema.plugin(paginate);

const UserActivity = mongoose.model('UserActivity', userActivitySchema);

module.exports = UserActivity;
