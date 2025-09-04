// import mongoose from "mongoose"

// export const connectDB = async() => {
//     try{
//        mongoose.connect(process.env.MONGO_URI)
//        console.log("MongoDB connected successfully");
       
//     }catch(error) {
//        console.error("Error connecting to MongoDB", error)
//        process.exit(1)  // exit with failure
//     }
// }


import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1); // exit with failure
    }
};

export default connectDB;