const express = require("express");

const server = express();

const cheeseList = [];

server.get("/", (request, response) => {
  response.send(`<h1>Hello Express</h1>`);
});

server.get("/colour", (request, response) => {
  const keyword = request.query;
  const colour = keyword.hex || "#FFFFFF";
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



server.get("/cheese", (request, response) => {
  const keyword = request.query;
  console.log(keyword);

  const list = cheeseList.map((num) => `<li>${num.cheesetype} | ${num.rating} Star</li>`);
  const html = `<ul>${list.join("")}</ul>`;

  response.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    </style>
    </head>
    <body>
    <form action="/cheese" method="POST">
    <li>
      <input type="text" id="cheesetype" name="cheesetype" />
      <label for="cheesetype">choose a cheese type</label>
    </li>
    <li>
    <input type="range" id="rating" name="rating" min="0" max="5" />
    <label for="rating">Rating</label>
    </li>

    <li class="button">
  <button type="submit">submit your cheese rating!</button>
    </li>
    </form>
    ${html}
    </body>
    </html> 
    `);
  // response.status(200).send("something went wrong");
  //
});


const bodyParser = express.urlencoded({ extended: true });


server.post("/cheese", bodyParser, (request, response) => {
  const cheesetype = request.body.cheesetype;
  const rating = request.body.rating;
  let newObject = {cheesetype, rating}
  cheeseList.push(newObject);
  console.log(cheeseList);
//   response.redirect(`/cheese`);

  const list = cheeseList.map((num) => `<li>${num.cheesetype} | ${num.rating} Star</li>`);
  const html = `<ul>${list.join("")}</ul>`;

  response.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <style>
    </style>
    </head>
    <body>
    <form action="/cheese" method="POST">
    <li>
      <input type="text" id="cheesetype" name="cheesetype" />
      <label for="cheesetype">choose a cheese type</label>
    </li>
    <li>
    <input type="range" id="rating" name="rating" min="0" max="5" />
    <label for="rating">Rating</label>
    </li>

    <li class="button">
  <button type="submit">submit your cheese rating!</button>
    </li>
    </form>
    ${html}
    </body>
    </html> 
    `);

//   response.send(`${cheesetype}, ${rating}, ${newObject}, ${cheeseList}`);
});

module.exports = server;
