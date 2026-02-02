const mongoose = require('mongoose');
const { CEFRLevel, PublishStatus } = require('../constants/app.constants');
const { Schema } = mongoose;

const lessonSchema = new Schema(
  {
    id: { type: Number, unique: true, index: true },
    title: { type: String, required: true },
    level: { type: String, enum: Object.values(CEFRLevel), required: true },
    status: { type: String, enum: Object.values(PublishStatus), default: PublishStatus.Draft },
    topicIds: [{ type: Number, ref: 'Topic' }],
    content: { type: String },
    exerciseId: { type: Number, ref: 'Exercise' },
    isPremium: { type: Boolean, default: false },
  },
  { timestamps: true }
);

lessonSchema.plugin(require('./plugins').toJSON);
lessonSchema.plugin(require('./plugins').paginate);

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
