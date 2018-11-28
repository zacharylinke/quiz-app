const Quiz = require('./quizModel');
const _ = require('lodash');

exports.params = function(req, res, next, id) {
  Quiz.findById(id)
    .then(function(quiz) {
      if(!quiz) {
        next(new Error('Quiz not found'));
      } else {
        req.quiz = quiz;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.delete = function (req, res) {
  req.quiz.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};

exports.get = function (req, res) {
  Quiz.find()
    .then(function(quizzes) {
      res.json(quizzes);
  }, function(err) {
    next(err);
  });
};

exports.getOne = function (req, res) {
  res.json(req.quiz);
};

exports.post = function (req, res) {
  Quiz.create(req.body)
    .then( function(quiz) {
      if(!quiz) {
        next(new Error('Quiz save failed'));
      } else {
        res.json(quiz);
      }
    }, function(err) {
      next(err);
    });
};

exports.put = function (req, res) {
  const quiz = req.quiz;
  const update = req.body;

  _.merge(quiz, update);
  quiz.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};