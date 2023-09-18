// Import the express module
let express = require("express");

// Create an express application
let server = express();

// Define the port to be used
let listeningPort = 3000;


// Define route for the root URL
server.get("/", (request, response) => {
  response.send("My First Express JS Application");
});

// Start the application
server.listen(listeningPort, () => {
  console.log(`Server is up and running at http://localhost:${listeningPort}`);
});