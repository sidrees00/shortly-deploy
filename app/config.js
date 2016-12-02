var mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Mongoose connection established');
});



// Defining schema:
var userSchema = new mongoose.Schema({
  'username': 'string',
  'password': 'string'
});

// Create model (to use our schema):
var User = mongoose.model('User', userSchema);

//Creating a document:
exports.createUser = function(username, password) {
  User.create({'username': username, 'password': password}, function(err, data) {
    if (err) {
      return handleError(err);
    }
  });
};

//make method to get password

exports.retrievePassword = function(username) {
  User.find({username: username}).exec(function(err, data) {
    if (err) {
      throw err;
    }
    return data.password;
  });
};

var linkSchema = new mongoose.Schema({ 
  tableName: 'urls',
  hasTimestamps: true,
  defaults: {visits: 0}
});



