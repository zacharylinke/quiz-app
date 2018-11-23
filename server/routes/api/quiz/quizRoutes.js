const router = require('express').Router();
const controller = require('./quizController');
const auth = require('../../../auth/auth');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];

router.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(checkUser, controller.post);

router.route('/:id')
    .get(controller.getOne)
    .delete(checkUser, controller.delete)
    .put(checkUser, controller.put);

module.exports = router;
