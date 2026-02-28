import { Router } from 'express';
import {verifyToken} from "../middleware/verifyToken.js"

const router = Router({mergeParams: true});
import {commentinfo,addcomment} from "../controllers/comment.c.js"

router.route("/:postId").get(commentinfo)
router.route("/add").post(verifyToken,addcomment)

export default router;