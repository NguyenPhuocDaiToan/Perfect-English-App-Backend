const mongoose = require('mongoose');
const { DifficultyLevel } = require('../constants/app.constants');

const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String }, // Added description
    questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
    timeLimit: { type: Number },
    difficulty: { type: String, enum: Object.values(DifficultyLevel) },
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
    status: { type: String, enum: ['Published', 'Draft'], default: 'Draft' }, // Added status
    isPremium: { type: Boolean, default: false }, // Added isPremium
  },
  { timestamps: true }
);

exerciseSchema.plugin(require('./plugins').toJSON);
exerciseSchema.plugin(require('./plugins').paginate);

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
