const mongoose = require('mongoose');
const { DifficultyLevel } = require('../constants/app.constants');
const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    id: { type: Number, unique: true, index: true },
    title: { type: String, required: true },
    questionIds: [{ type: Number, ref: 'Question' }],
    timeLimit: { type: Number },
    difficulty: { type: String, enum: Object.values(DifficultyLevel) },
    topicIds: [{ type: Number, ref: 'Topic' }],
    lessonIds: [{ type: Number, ref: 'Lesson' }],
  },
  { timestamps: true }
);

exerciseSchema.plugin(require('./plugins').toJSON);
exerciseSchema.plugin(require('./plugins').paginate);

const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;
