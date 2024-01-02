const express = require("express");

const server = express();

server.get("/", (request, response) => {
  response.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (request, response) => {
    const keyword = request.query;
    const colour = keyword.hex || '#FFFFFF';
    console.log(keyword.hex, colour);
   
    response.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    body {
      background-color: ${colour};
    }
    </style>
    </head>
    <body>
    <form action="/colour" method="GET">
    <li>
      <label for="name">choose a hex colour #</label>
   
      <input type="color" id="head" name="hex" value="#e66465" />
    </li>
    <li class="button">
  <button type="submit">Send your message</button>
    </li>
    </form>

    </body>
    </html> 
    `);
        // response.status(200).send("something went wrong");
         //   <input type="text" id="hex" name="hex" />
    
    
  });

module.exports = server;
