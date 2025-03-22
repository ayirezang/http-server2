const express = require("express");
const path = require("path");
const server = express();

const bodyParser = require("body-parser");

const loginRequestHandler = (req, res) => {
  // let body = "";
  // req.on("data", (chunk) => {
  //   body += chunk;
  // });

  // req.on("end", () => {
  //   console.log(body);
  // });
  console.log(req.body);
  res.send("done");
};
server.use(bodyParser.urlencoded({ extended: false }));
server.post("/login", loginRequestHandler);

server.use(express.static(path.join(__dirname, "public")));

server.listen(3000, () => {
  console.log("server is listening");
});
