const mongoose = require('mongoose');
const { UserRole, UserStatus } = require('../constants/app.constants');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    id: { type: Number, unique: true, index: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.Student },
    status: { type: String, enum: Object.values(UserStatus), default: UserStatus.Active },
    isPremium: { type: Boolean, default: false },
    streak: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    avatarUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
  },
  { timestamps: true }
);

userSchema.plugin(require('./plugins').toJSON);
userSchema.plugin(require('./plugins').paginate);

const UserApp = mongoose.model('UserApp', userSchema);
module.exports = UserApp;
