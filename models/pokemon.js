// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pokemon = {
  all: function(cb) {
    orm.all("team", function(res) {
      cb(res);
    });
  },
  // What to do when creating new variables for the tables
  create: function(cols, vals, cb) {
    orm.create("team", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("team", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the functions to the controller
module.exports = pokemon;
