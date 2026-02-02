const mongoose = require('mongoose');
const { Schema } = mongoose;

const userProgressSchema = new Schema(
  {
    exerciseId: { type: Number, ref: 'Exercise', required: true },
    userId: { type: Number, ref: 'UserApp', required: true },
    status: { type: String, enum: ['In Progress', 'Completed'], default: 'In Progress' },
    bestScore: { type: Number, min: 0, max: 100, default: 0 },
    lastPlayedAt: { type: Date },
  },
  { timestamps: true }
);

userProgressSchema.plugin(require('./plugins').toJSON);
userProgressSchema.plugin(require('./plugins').paginate);

const UserProgress = mongoose.model('UserProgress', userProgressSchema);
module.exports = UserProgress;
