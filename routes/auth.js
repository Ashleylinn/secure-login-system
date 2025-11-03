import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

//used to register a new user
router.post("/register", registerUser);

//if a user already create an account (exiting user)
router.post("/login", loginUser);

//requires valid token to protect route
router.get("/profile", verifyToken, getProfile);

export default router;
