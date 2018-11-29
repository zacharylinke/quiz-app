const router = require('express').Router();
const controller = require('./userController');
const auth = require('../../../auth/auth');

const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const checkAdminUser = [auth.decodeToken(), auth.getFreshUser(), auth.verifyAdminUser()];
router.param('id', controller.params);
//router.get('/me', checkUser, controller.me);

router.route('/')
  .get(checkAdminUser, controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getOne)
  .put(checkUser, controller.put)
  .delete(checkUser, controller.delete)

module.exports = router;
