import express from "express";
import UserMethod from "../controllers/user.controller.js";

// add the middlewares

const routesUser = express.Router();

routesUser.post("/login", UserMethod.login)

routesUser.post("/register", UserMethod.register)

export default routesUser;