/* eslint-disable no-await-in-loop */
const mongoose = require('mongoose');
const { generateUniqueSlug } = require('../utils/slug.util');
const { toJSON, paginate } = require('./plugins/index');

const { Schema } = mongoose;

// --- 1. BlogPost Schema ---
const BlogPostSchema = new Schema(
  {
    // --- Thông tin chính ---
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      index: true,
      trim: true,
    },
    summary: {
      type: String,
      trim: true,
      default: '',
    },
    content: {
      type: String, // HTML hoặc Markdown
      required: true,
    },
    thumbnail: {
      type: String,
      default: '',
    },
    // --- Phân loại ---
    topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
    lesson: { type: Schema.Types.ObjectId, ref: 'Lesson' },

    categories: {
      type: [{ type: Schema.Types.ObjectId, ref: 'BlogCategory' }],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },

    // --- Trạng thái xuất bản ---
    status: {
      type: String,
      enum: ['Draft', 'Published', 'Archived'],
      default: 'Draft',
      required: true,
      index: true,
    },
    publishedAt: {
      type: Date,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    isPinned: {
      type: Boolean,
      default: false,
    },

    // --- SEO ---
    seoTitle: { type: String },
    seoDescription: { type: String },

    // --- Thống kê ---
    views: { type: Number, default: 0 },

    // --- Hiển thị ở các trang nào ---
    displayPages: {
      type: [String],
      enum: ['sharing', 'community'], // Giới hạn chỉ chấp nhận 2 giá trị này
      default: [], // Mặc định là mảng rỗng (không hiển thị ở đâu)
    },

    // --- Audit & Soft Delete ---
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
    deletedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

//
// --- 2. Hooks ---
//

BlogPostSchema.pre('save', async function (next) {
  try {
    // 1. Xử lý Slug
    // Chỉ tạo slug nếu:
    // - Document mới tinh
    // - Hoặc Title thay đổi VÀ bài viết chưa Public (để tránh mất SEO)
    // - Hoặc user cố tình set slug rỗng để regenerate
    const isTitleChanged = this.isModified('title');
    const isPublished = this.status === 'Published';

    if ((this.isNew && !this.slug) || (isTitleChanged && !isPublished)) {
      this.slug = await generateUniqueSlug(this.title, this.constructor, this._id);
    }

    // 2. Xử lý Published Date
    if (this.isModified('status') && this.status === 'Published' && !this.publishedAt) {
      this.publishedAt = new Date();
    }

    next();
  } catch (error) {
    next(error);
  }
});

//
// --- 3. Indexes ---
//

// Lọc bài viết công khai mới nhất
BlogPostSchema.index({ status: 1, publishedAt: -1 });
// Lọc bài viết theo category
BlogPostSchema.index({ categories: 1, status: 1 });

//
// --- 4. Plugins ---
//
BlogPostSchema.plugin(toJSON);
BlogPostSchema.plugin(paginate);

//
// --- 5. Model ---
//
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;
