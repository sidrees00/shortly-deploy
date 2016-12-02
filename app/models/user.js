var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = {
  initialize: function(username, password) {
    // db.createUser(username, hashPassword(password));
    db.createUser(username, password);
  },
  // comparePassword: function(attemptedPassword, callback, username) {
  //   bcrypt.compare(attemptedPassword, db.retrievePassword(username), function(err, isMatch) {
  //     callback(isMatch);
  //   });
  // },
  // hashPassword: function(password) {
  //   var cipher = Promise.promisify(bcrypt.hash);
  //   return cipher(password, null, null).bind(this)
  //     .then(function(hash) {
  //       return hash;
  //     });
  // }
};

module.exports = User;
