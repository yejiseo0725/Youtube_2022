import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("I still love you.");
};
const handleLogin = (req, res) => {
  return res.send("Login here :3");
};

app.get("/", handleHome);
app.get("/login", handleLogin);
// app, request get, root, callback function 의 구조

// app.get("/", () => console.log("trying to go home"));

// const handleListening = () => console.log("Server listening on port 4000");
// app.listen(4000, handleListening);

app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);
