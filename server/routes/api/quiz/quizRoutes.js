const router = require('express').Router();
const controller = require('./quizController')

router.param('id', controller.params);

router.route('/')
    .get(controller.get)
    .post(controller.post);

router.route('/:id')
    .get(controller.getOne)
    .delete(controller.delete)
    .put(controller.put);

module.exports = router;
