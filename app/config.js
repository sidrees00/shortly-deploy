var path = require('path');
// var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var mongoose = require('mongoose');

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















































// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, '../db/shortly.sqlite')
//   },
//   useNullAsDefault: true
// });
// var db = require('bookshelf')(knex);

// db.knex.schema.hasTable('urls').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('urls', function (link) {
//       link.increments('id').primary();
//       link.string('url', 255);
//       link.string('baseUrl', 255);
//       link.string('code', 100);
//       link.string('title', 255);
//       link.integer('visits');
//       link.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });
