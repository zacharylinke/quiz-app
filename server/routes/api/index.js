const router = require('express').Router();

router.use('/quizzes', require('./quiz/quizRoutes'));

module.exports = router;