var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // Right now this is just a basic response
      // Will need to change this to a response with data from the db
    
      // Invoke models.messages.get
      models.messages.get();
    
      console.log('In Controllers: messages.get');
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // Right now this is just a basic response
      // Will need to change this to a response with data from the db
        
      // Invoke models.messages.post
      models.messages.post();    
  
      console.log('In Controllers: messages.post');
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

