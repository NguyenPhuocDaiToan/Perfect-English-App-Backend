const mongoose = require('mongoose');
const { QuestionType, QuestionTopic, DifficultyLevel } = require('../constants/app.constants');

const { Schema } = mongoose;

const mcqOptionSchema = new Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false },
});

const questionSchema = new Schema(
  {
    type: { type: String, enum: Object.values(QuestionType), required: true },
    topic: { type: String, enum: Object.values(QuestionTopic), required: true },
    difficulty: { type: String, enum: Object.values(DifficultyLevel), required: true },
    subTopic: { type: String, required: true },
    questionText: { type: String, required: true },
    options: [mcqOptionSchema],
    correctAnswer: { type: Boolean, private: true }, // For True/False, private
    correctAnswerText: { type: String, private: true }, // For FillBlank, private
    explanation: { type: String },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

questionSchema.plugin(require('./plugins').toJSON);
questionSchema.plugin(require('./plugins').paginate);

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
