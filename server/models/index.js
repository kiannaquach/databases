var db = require('../db');
// Darwin - db.addDada, remove
// create connection between mySql to the server
// in db folder

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which produces all the messages
    post: function (req, res) {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

