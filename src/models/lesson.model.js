const mongoose = require('mongoose');
const { CEFRLevel, PublishStatus } = require('../constants/app.constants');

const { Schema } = mongoose;

const lessonSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true }, // Added slug based on requirements
    level: { type: String, enum: Object.values(CEFRLevel), required: true },
    status: { type: String, enum: Object.values(PublishStatus), default: PublishStatus.Draft },
    topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }],
    content: { type: String },
    exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
    isPremium: { type: Boolean, default: false },
    views: { type: Number, default: 0 }, // Added views based on requirements
  },
  { timestamps: true }
);

lessonSchema.plugin(require('./plugins').toJSON);
lessonSchema.plugin(require('./plugins').paginate);

const Lesson = mongoose.model('Lesson', lessonSchema);
module.exports = Lesson;
