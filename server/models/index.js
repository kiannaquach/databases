var db = require('../db');
// Darwin - db.addData, db.removeData
// create connection between mySql to the server
// in db folder

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('In Models: models.messages.get');
      db.query('SELECT * FROM messages', function(err, rows, fields) {
        if (err) throw err;

        console.log("In Models: We're getting closer! Here is the row: " + rows);
        rows.forEach( (value) => {
          console.log(value);
        });
      });
  
    }, // a function which produces all the messages
    post: function (req, res) {

      console.log('In Models: models.messages.post');
      db.query('INSERT INTO users (userID, username) VALUES(2, "Ruslan")', function(err, rows, fields) {
        if (err) throw err;

        console.log('Inserted a new user');
      });

      // db.query('INSERT INTO messages (messageID, body, userID) VALUES(2, "This is Ruslans message", 2)', function() {
      //   if (err) throw err;

      //   console.log('Inserted a new message');
      // });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

