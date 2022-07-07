import express from "express";
import { join } from "../src/controllers/userController";
import { trending } from "../src/controllers/videoController";

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home!");
const handleJoin = (req, res) => res.send("Home!");

globalRouter.get("/", trending);
globalRouter.get("/join", join);

// private

export default globalRouter;

// now public
