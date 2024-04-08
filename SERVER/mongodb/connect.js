import mongoose from "mongoose";

const connectDB=async (url)=>{
    //mongoose.set('strictQuery',true);
    await mongoose.connect(url).then(()=>console.log(` connect to database ${url}`))
    .catch((err)=>{console.log("failed to connect",err);})
}

export default connectDB ;