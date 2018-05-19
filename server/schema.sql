CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  userID INT,
  username TEXT,
  PRIMARY KEY (userID) 
);  

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID INT,
  body TEXT,
  userID INT,
  
  PRIMARY KEY (messageID),
  FOREIGN KEY (userID)
  REFERENCES users (userID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
      mysql -u student -p
 *  to create the database and the tables.*/

