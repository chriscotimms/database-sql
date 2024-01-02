const express = require("express");

const server = express();

server.listen(3000, () => console.log("Listening at http://localhost:3000"));

server.get("/", (request, response) => {
  response.send(`<h1>Hello Express</h1>`);
});

module.exports = server;
