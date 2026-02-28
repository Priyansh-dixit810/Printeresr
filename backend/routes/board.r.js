import { Router } from 'express';

const router = Router({mergeParams: true});
import {boardinfo} from "../controllers/board.c.js"

router.route("/:id").get(boardinfo)

export default router;