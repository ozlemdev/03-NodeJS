"use strict ";

"use strict";

/* --------------------------------------------

        NODEJS

-------------------------------------------- */
const http = require("node:http"); // builtin: https://nodejs.org/api/http.html
/* -------------------------------------------- */

// http.createServer((req, res) => { ... }
const app = http.createServer((request, response) => {
  response.end("<h1> Welcome to NodeJS Server </h1>");
});

// http://127.0.0.1:8000
// http://localhost:8000
app.listen(8000, () => console.log("Server Runned: http://127.0.0.1:8000"));
