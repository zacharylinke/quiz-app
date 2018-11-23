const router = require('express').Router();

router.use('/quizzes', require('./quiz/quizRoutes'));
router.use('/users', require('./user/userRoutes'));

module.exports = router;