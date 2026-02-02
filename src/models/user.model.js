
const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { UserRole, UserStatus } = require('../constants/app.constants');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    role: { type: String, enum: Object.values(UserRole), default: UserRole.Student },
    status: { type: String, enum: Object.values(UserStatus), default: UserStatus.Active },
    isPremium: { type: Boolean, default: false },
    streak: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    avatarUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    password: { type: String, required: true, trim: true, minlength: 8, private: true },
  },
  { timestamps: true }
);

userSchema.plugin(toJSON);
userSchema.plugin(paginate);

userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
  const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
  return !!user;
};

const bcrypt = require('bcryptjs');
userSchema.methods.isPasswordMatch = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

userSchema.pre(['findOneAndUpdate', 'updateOne'], async function (next) {
  const update = this.getUpdate();
  if (update && update.password) {
    const hashed = await bcrypt.hash(update.password, 8);
    this.setUpdate({ ...update, password: hashed });
  }
  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
