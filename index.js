const express = require("express");
const path = require("path");
const server = express();

const serveHomePage = (req, res) => {
  //finding file
  const homePageFile = path.join(__dirname, "public", "index.html");
  //sending the file
  res.sendFile(homePageFile);
};

const serveAboutPage = (req, res) => {
  //finding about
  const aboutPageFile = path.join(__dirname, "public", "about.html");
  res.sendFile(aboutPageFile);
};

const serveServPage = (req, res) => {
  //finding service
  const servPageFile = path.join(__dirname, "public", "services.html");
  res.sendFile(servPageFile);
};

server.get("/", serveHomePage);
server.get("/about", serveAboutPage);
server.get("/services", serveServPage);

server.use(express.static(path.join(__dirname, "public")));
server.listen(3000, () => {
  console.log("server is listening");
});
// const express = require("express");
// const server = express();

// const generalMiddleWare = (req, res, next) => {
//   console.log("this is the middleware");

//   res.send("<h1>this is the middleware</h1>");
//   next();
// };

// const profilePage = (req, res) => {
//   console.log("this is the profile page");
//   res.send("<h1>this is a profile page</h1>");
// };
// const profilePageMiddleWare = (req, res, next) => {
//   console.log("this is the middleware profile");
//   next();
// };
// server.post("/profile", profilePageMiddleWare);
// server.use(generalMiddleWare);
// server.listen(4000, "127.0.0.1", () =>
//   console.log("server is running on port 4000")
// );
// //assignment
// // const express = require("express");

// // const server = express();
// // //PROFILE
// // const handleAllTypesOfRequest = (req, res) => {
// //   res.send("response from server.use");
// // };
// // //CONTACT
// // const handlePutRequest = (req, res) => {
// //   res.send("hey why why why");
// // };
// // //ABOUT
// // const handleDeleteRequest = (req, res) => {
// //   res.send("okay finally");
// // };
// // server.post("/profile", handleAllTypesOfRequest);
// // server.get("/login", (req, res) => res.send("hey you there"));
// // server.put("/contact", handlePutRequest);
// // server.delete("/about", handleDeleteRequest);

// // server.listen(3000, () => console.log("server is listening"));

// // // const express = require("express");
// // // const handleAllRequest = (requestObject, responseObject) => {
// // //   const url = requestObject.url;
// // //   responseObject.setHeader("content-type", "text/html");

// // //   responseObject.end();
// // // };
// // // const handleHomeRequest = (req, res) => {
// // //   res.send("<h1>welcome abode</h1>");
// // // };
// // // const handleLoginRequest = (req, res) => {
// // //   res.send("<h1>hey you</h1>");
// // // };
// // // const handleAboutRequest = (req, res) => {
// // //   res.send("<h1>wow you there</h1>");
// // // };
// // // const server = express();

// // // server.use("/login", handleLoginRequest);
// // // server.use("/about", handleAboutRequest);
// // // server.use("/", handleHomeRequest);

// // // server.use(handleAllRequest);

// // // // const server = http.createServer(handleAllRequest);
// // // server.listen(3000, "127.0.0.1", () => console.log("server is ready"));
