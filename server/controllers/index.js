var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // Right now this is just a basic response
      // Will need to change this to a response with data from the db
      console.log('The request got to messages.get');
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('The request got to messages.post');
      res.writeHead(201, {'Content-Type': 'application/json'});
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

