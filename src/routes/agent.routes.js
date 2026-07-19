import express from "express";
import chatMess from "../controllers/agent.controller.js";


const routesAgent = express.Router();

routesAgent.post("/chatBot", chatMess)

export default routesAgent;