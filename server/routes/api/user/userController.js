const User = require('./userModel');
const _ = require('lodash');
const signToken = require('../../../auth/auth').signToken;

exports.params = function(req, res, next, id) {
  User.findById(id)
    .then(function(user) {
      if(!user) {
        next(new Error('User not found'));
      } else {
        req.user = user;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.delete = function (req, res, next) {
  req.user.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};

exports.get = function (req, res, next) {
  User.find()
    .then(function(users) {
      res.json(users);
  }, function(err) {
    next(err);
  });
};

exports.getOne = function (req, res, next) {
  res.json(req.user);
};

exports.post = function (req, res, next) {
  const newUser = new User(req.body);
  newUser.save(function(err, user) {
    if (err) { return next(err);}
    
    const token = signToken(user._id);
    res.json({token: token, _id: user._id});
  });
};

exports.put = function (req, res, next) {
  const user = req.user;
  const update = req.body;

  _.merge(user, update);
  user.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.me = function(req, res) {
  res.json(req.user.toJson());
};