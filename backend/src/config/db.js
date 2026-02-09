import mongoose from "mongoose";

export const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to DB`)
    } catch (error) {
        console.log('error connecting tb db', error)
        process.exit(1)
    }
}
