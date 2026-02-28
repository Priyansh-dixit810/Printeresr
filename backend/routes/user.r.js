import { Router } from 'express';
const router = Router({mergeParams: true});
import {loginUser, logoutUser, registerUser, userinfo} from "../controllers/user.c.js"

router.route(`/:username`).get(userinfo);
router.route("/auth/register").post(registerUser);
router.route("/auth/login").post(loginUser);
router.route("/auth/logout").post(logoutUser);

export default router;