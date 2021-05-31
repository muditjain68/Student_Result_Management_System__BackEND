import express from "express";
const router = express.Router();

import { signin, signup } from "../controllers/user.js";
import {postResult,getResult} from "../controllers/result.js";

router.post("/signin", signin);
router.post("/signup", signup);

router.post("/result",postResult);

router.get("/result/:id",getResult);

export default router;