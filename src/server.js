const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (request, response) => {
    const keyword = request.query;
    const colour = keyword.hex || 'FFFFFF';
    console.log(keyword.hex, colour);
   
    response.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      background-color: #${colour};
    }
    </style>
    </head>
    <body>
    
    </body>
    </html> 
    `);
        // response.status(200).send("something went wrong");
    
    
  });

module.exports = server;
