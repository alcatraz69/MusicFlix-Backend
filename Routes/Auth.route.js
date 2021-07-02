import express from "express";
const router = express.Router();
// const { login } = require("../Controllers/auth.js");
// const { register } = require("../Controllers/auth.js");
import { login, register } from "../Controllers/auth.js";

router.post("/login", login);
router.post("/register", register);

export default router;
