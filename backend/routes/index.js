import express from "express";
import { getAllPost,
         storePost,
         getPostById,
         updatePost,
         deletePost
} from "../controllers/PostController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUsers, Register, Login, Logout } from '../controllers/UserController.js'
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router()

/** SWAGGER UI **/
import swaggeUi from "swagger-ui-express"
import apiDocumentation from "../apidocs.json"
router.use('/api-docs', swaggeUi.serve, swaggeUi.setup(apiDocumentation));
/** END SWAGGER UI **/

/** untuk Route Auth **/
router.post('/login', Login);
router.post('/register', Register);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

/** Setelah Login dan verifikasi Token **/
router.get('/users', verifyToken, getUsers);

router.get('/posts', getAllPost);
router.post('/posts', storePost);
router.get('/posts/:id', getPostById);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

export default router;
