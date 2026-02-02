const BaseRoute = require('../utils/_base.route');
const userAppController = require('../../controllers/userApp.controller');
const userAppValidation = require('../../validations/userApp.validation');

const resource = 'userApp';
const router = new BaseRoute(userAppController, userAppValidation, resource).router;

module.exports = router;
