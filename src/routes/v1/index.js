const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const fileRoute = require('./file.route');
const roleRoute = require('./role.route');
const permissionRoute = require('./permission.route');
const blogPostRoute = require('./blogPost.route');
const blogCategoryRoute = require('./blogCategory.route');
const blogTagRoute = require('./blogTag.route');
const auditLogRoute = require('./auditLog.route');
const notificationRoute = require('./notification.route');

const topicRoute = require('./topic.route');
const lessonRoute = require('./lesson.route');
const questionRoute = require('./question.route');
const exerciseRoute = require('./exercise.route');
const grammarTopicRoute = require('./grammarTopic.route');
const testimonialRoute = require('./testimonial.route');
const userActivityRoute = require('./userActivity.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/files',
    route: fileRoute,
  },
  {
    path: '/roles',
    route: roleRoute,
  },
  {
    path: '/permissions',
    route: permissionRoute,
  },
  {
    path: '/blogs',
    route: blogPostRoute,
  },
  {
    path: '/blog-categories',
    route: blogCategoryRoute,
  },
  {
    path: '/blog-tags',
    route: blogTagRoute,
  },
  {
    path: '/audit-logs',
    route: auditLogRoute,
  },
  {
    path: '/notifications',
    route: notificationRoute,
  },
  {
    path: '/topics',
    route: topicRoute,
  },
  {
    path: '/lessons',
    route: lessonRoute,
  },
  {
    path: '/questions',
    route: questionRoute,
  },
  {
    path: '/exercises',
    route: exerciseRoute,
  },
  {
    path: '/grammar-topics',
    route: grammarTopicRoute,
  },
  {
    path: '/testimonials',
    route: testimonialRoute,
  },
  {
    path: '/user-activities',
    route: userActivityRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
