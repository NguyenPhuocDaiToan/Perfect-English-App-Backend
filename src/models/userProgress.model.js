const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const { Schema } = mongoose;

const userProgressSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    exercise: { type: Schema.Types.ObjectId, ref: 'Exercise', required: true },
    status: { type: String, enum: ['In Progress', 'Completed'], default: 'In Progress' },
    score: { type: Number, default: 0 }, // 0-100
    userAnswers: { type: Map, of: Schema.Types.Mixed }, // Store detailed answers: { questionId: answer }
    completedAt: { type: Date },
  },
  { timestamps: true }
);

userProgressSchema.plugin(toJSON);
userProgressSchema.plugin(paginate);

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = UserProgress;
