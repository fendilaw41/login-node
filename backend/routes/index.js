import express from "express";
import { getAllPost, storePost } from "../controllers/PostController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUsers, Register, Login, Logout } from '../controllers/UserController.js'
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router()

/** untuk Route Auth **/
router.post('/login', Login);
router.post('/register', Register);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

/** Setelah Login dan verifikasi Token **/
router.get('/users', verifyToken, getUsers);
router.get('/posts', getAllPost);
router.post('/posts', storePost);

export default router;
