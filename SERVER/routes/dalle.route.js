import express from "express"
import  createImage  from "../controllers/dalle.controler.js"
const router=express.Router()

router.route("/").post(createImage)

 export default router ;