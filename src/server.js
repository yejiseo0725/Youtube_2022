import express from "express";

const PORT = 4000;

const app = express();

// const logger = (req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   // method 를 출력하면, get 이 출력된다. (방식)
//   next();
// };

const routerLogger = (req, res, next) => {
  console.log(req.path); // 위치 === url
  next();
};

const methodLogger = (req, res, next) => {
  console.log(req.method); // get, post 등의 방식
  next();
};

const handleHome = (req, res) => {
  return res.send("<h1>Hello!!!</h1>");
};

app.get("/", methodLogger, routerLogger, handleHome);
// app, request get, root, callback function 의 구조

// app.get("/", () => console.log("trying to go home"));

const handleListening = () => console.log("Server listening on port 4000");

app.listen(4000, handleListening);
