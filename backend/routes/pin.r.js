import { Router } from 'express';

const router = Router({mergeParams: true});
import {getPins,getPin} from "../controllers/pin.c.js"

router.route("/").get(getPins)

router.route("/:id").get(getPin)

export default router;