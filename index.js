"use strict ";

/* ----------------------------------------

          NODEJS

---------------------------------------- */

const htpp = require("node:http"); // builtin: https://nodejs.org/api/http.html

//http.createServer((req, res) => { ... }

htpp.createServer((request, response) => {
  response.end("Wellcome to NodeJS Server");
});

// 127.0.0.1:8000

app.listen(8000, () => console.log("Server Runned: http://127.0.0.1:8000"));
