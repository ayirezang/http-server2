const express = require("express");

const server = express();
const handleAllTypesOfRequest = (req, res) => {
  res.send("response from server.use");
};
const handlePutRequest = (req, res) => {
  res.send("hey why why why");
};
const handleDeleteRequest = (req, res) => {
  res.send("okay finally");
};
server.post("/profile", handleAllTypesOfRequest);
server.get("/login", (req, res) => res.send("hey you there"));
server.put("/contact", handlePutRequest);
server.delete("/about", handleDeleteRequest);

server.listen(3000, () => console.log("server is listening"));

// const express = require("express");
// const handleAllRequest = (requestObject, responseObject) => {
//   const url = requestObject.url;
//   responseObject.setHeader("content-type", "text/html");

//   responseObject.end();
// };
// const handleHomeRequest = (req, res) => {
//   res.send("<h1>welcome abode</h1>");
// };
// const handleLoginRequest = (req, res) => {
//   res.send("<h1>hey you</h1>");
// };
// const handleAboutRequest = (req, res) => {
//   res.send("<h1>wow you there</h1>");
// };
// const server = express();

// server.use("/login", handleLoginRequest);
// server.use("/about", handleAboutRequest);
// server.use("/", handleHomeRequest);

// server.use(handleAllRequest);

// // const server = http.createServer(handleAllRequest);
// server.listen(3000, "127.0.0.1", () => console.log("server is ready"));
