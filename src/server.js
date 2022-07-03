import express from "express";

const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is trying to go to: ${req.url} now.`);
  next();
};
const handleHome = (req, res) => {
  return res.send("I love middlewares :3");
};

app.get("/", gossipMiddleware, handleHome);
// app, request get, root, callback function 의 구조

// app.get("/", () => console.log("trying to go home"));

// const handleListening = () => console.log("Server listening on port 4000");
// app.listen(4000, handleListening);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
