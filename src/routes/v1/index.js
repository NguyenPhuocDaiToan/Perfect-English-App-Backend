const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');
const comboRoute = require('./combo.route');
const fileRoute = require('./file.route');
const roleRoute = require('./role.route');
const permissionRoute = require('./permission.route');
const customerRoute = require('./customer.route');
const blogPostRoute = require('./blogPost.route');
const blogCategoryRoute = require('./blogCategory.route');
const blogTagRoute = require('./blogTag.route');
const employeeRoute = require('./employee.route');
const auditLogRoute = require('./auditLog.route');
const notificationRoute = require('./notification.route');

const userAppRoute = require('./userApp.route');
const topicRoute = require('./topic.route');
const lessonRoute = require('./lesson.route');
const questionRoute = require('./question.route');
const exerciseRoute = require('./exercise.route');
const userProgressRoute = require('./userProgress.route');

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
    path: '/combos',
    route: comboRoute,
  },
  {
    path: '/employees',
    route: employeeRoute,
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
    path: '/customers',
    route: customerRoute,
  },
  {
    path: '/blog-posts',
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
    path: '/user-apps',
    route: userAppRoute,
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
    path: '/user-progress',
    route: userProgressRoute,
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
