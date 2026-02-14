const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const { Schema } = mongoose;

const GrammarTopicSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String },
    level: { type: String, required: true }, // e.g. 'A1', 'B2', etc.
    priority: { type: Number, default: 0 },
    status: { type: String, default: 'Draft' },
  },
  { timestamps: true }
);

GrammarTopicSchema.plugin(toJSON);
GrammarTopicSchema.plugin(paginate);

const GrammarTopic = mongoose.model('GrammarTopic', GrammarTopicSchema);

module.exports = GrammarTopic;
