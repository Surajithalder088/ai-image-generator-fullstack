import express from "express"
import { createPost ,allPosts} from "../controllers/post.controler.js"
const router=express.Router()

router.route("/").post(createPost)
router.route("/").get(allPosts)
 export default router ;