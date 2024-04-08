import * as dotenv from "dotenv"
import  OpenAi from "openai"
/*
const configuration = new Configuration({
    apiKey:process.env.OPEN_AI_API-KEY
})*/
const openai = new OpenAi({apiKey:"org-ItiKoCUptYC41stJ9O4s8VZu"})


const createImage  = async (req,res)=>{
        try{
            const {prompt} =req.body;
            ;
            const aiResponse =await openai.createImage({
                prompt,
                n:1,
                size:'1024 x 1024',
                response_format:'b64_json'
            })
console.log(" done")
            const image=aiResponse.data.data[0].b64_json;
            //return res.status(200).json({photo:image})
            
        }catch(error){
res.status(500).json({messege:"failed to generate by ai"})
        }
}


export default createImage 