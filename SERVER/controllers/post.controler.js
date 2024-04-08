import Post from"../mongodb/models/post.js"
import * as dotenv from "dotenv"
import {v2 as cloudinary} from 'cloudinary'


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUDE_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})


const createPost=async(req,res)=>{
    try {
        const {name,prompt,photo}=req.body;
        const photoUrl=await cloudinary.uploader.upload(photo);
        
 const post = await Post.create({name,prompt,photo:photoUrl.url})
 res.status(201).json({swucess:true, data :post})
    } catch (error) {
        console.log("error to post ",error);
    }

}

const allPosts=async(req,res)=>{
    try {
        
        
 const posts = await Post.find()
  return res.status(200).json(posts)
    } catch (error) {
        console.log("error to post ",error);
        return res.status(404).json({messege:'failed to fetch data'})
    }
}

export  {allPosts , createPost}