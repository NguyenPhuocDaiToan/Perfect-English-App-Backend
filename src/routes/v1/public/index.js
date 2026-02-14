const express = require('express');
// const docsRoute = require('./docs.route');
const config = require('../../../config/config');
const categoryRoute = require('./category.route');
const blogPostRoute = require('./blogPost.route');
const blogTagRoute = require('./blogTag.route');
const blogCategoryRoute = require('./blogCategory.route');
const authRoute = require('../auth.route');
const payosWebhook = require('./payos.webhook');
const userRoute = require('./user.route');
const exerciseRoute = require('./exercise.route');
const notificationRoute = require('../notification.route');
const topicRoute = require('./topic.route');
const lessonRoute = require('./lesson.route');
const questionRoute = require('./question.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/topics',
    route: topicRoute,
  },
  {
    path: '/lessons',
    route: lessonRoute,
  },
  {
    path: '/exercises',
    route: exerciseRoute,
  },
  {
    path: '/questions',
    route: questionRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
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
    path: '/payos-webhook',
    route: payosWebhook,
  },
  {
    path: '/notifications',
    route: notificationRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  // {
  //   path: '/docs',
  //   route: docsRoute,
  // },
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
