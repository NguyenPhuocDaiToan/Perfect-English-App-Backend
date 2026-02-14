const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { generateUniqueSlug } = require('../utils/slug.util');

const { Schema } = mongoose;

const TopicSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true }, // Not required here because it's generated
    category: { type: String, required: true }, // TopicCategory
    description: { type: String },
    image: { type: String },
    status: { type: String, default: 'Draft' }, // PublishStatus
    priority: { type: Number, default: 0 },
    // Add other fields if needed from previous version or new requirements
  },
  { timestamps: true }
);

TopicSchema.plugin(toJSON);
TopicSchema.plugin(paginate);

TopicSchema.pre('save', async function (next) {
  if (this.isModified('title') || this.isNew) {
    if (!this.slug || this.isModified('title')) {
      this.slug = await generateUniqueSlug(this.title, this.constructor, this._id);
    }
  }
  next();
});

const Topic = mongoose.model('Topic', TopicSchema);

module.exports = Topic;
