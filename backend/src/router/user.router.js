import {Router} from "express"
import { loginUser, postContact, registerUser } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(
    registerUser
)

router.route("/login").post(loginUser)
router.route("/contact").post(postContact)


export default router;


