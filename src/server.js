import express from "express";
import logger from "morgan";

const PORT = 4000;

const app = express();

const home = (req, res) => {
  console.log("I will respond.");
  return res.send("<h1>Hello!!!</h1>");
};

const login = (req, res) => {
  return res.send("login");
};

app.use(logger(""));
app.get("/", home);
app.get("/login", login);

const handleListening = () => console.log("Server listening on port 4000");

app.listen(4000, handleListening);
