import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  // method 를 출력하면, get 이 출력된다. (방식)
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares :3");
};

app.get("/", logger, handleHome);
// app, request get, root, callback function 의 구조

// app.get("/", () => console.log("trying to go home"));

// const handleListening = () => console.log("Server listening on port 4000");
// app.listen(4000, handleListening);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
