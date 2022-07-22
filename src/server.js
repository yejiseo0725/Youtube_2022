import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    return res.send("<h1>I still love u</h1>");
};
const handleLogin = (req, res) => {
    return res.send("Login Here!!");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port ${PORT}`);
app.listen(PORT, handleListening);

