const mongoose = require('mongoose');
const { TopicCategory, PublishStatus } = require('../constants/app.constants');
const { Schema } = mongoose;

const topicSchema = new Schema(
  {
    id: { type: Number, unique: true, index: true },
    title: { type: String, required: true },
    category: { type: String, enum: Object.values(TopicCategory), required: true },
    description: { type: String },
    status: { type: String, enum: Object.values(PublishStatus), default: PublishStatus.Draft },
  },
  { timestamps: true }
);

topicSchema.plugin(require('./plugins').toJSON);
topicSchema.plugin(require('./plugins').paginate);

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;
