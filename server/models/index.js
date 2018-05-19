var db = require('../db');
// db.addDada, remove
// create connection between mySql to the server
// in db folder

module.exports = {
  messages: {
    get: function (req, res) {
      // use db.query(key words and location from db, callback)
      db.query('INSERT ')
    }, // a function which produces all the messages
    post: function (req, res) {
      db.query('SELECT * FROM messages', function(err, rows, fields) {
        if err throw err;
        
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

