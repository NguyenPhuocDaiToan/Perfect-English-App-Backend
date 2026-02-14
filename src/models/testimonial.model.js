const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const { Schema } = mongoose;

const TestimonialSchema = new Schema(
  {
    quote: { type: String, required: true },
    author: { type: String, required: true },
    location: { type: String },
    avatar: { type: String },
    priority: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

TestimonialSchema.plugin(toJSON);
TestimonialSchema.plugin(paginate);

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = Testimonial;
