import mongoose from "mongoose";


export  const connectDB = async () => {

await mongoose.connect('mongodb+srv://ignatiusdb57:S9I6A4fXkcHtIE6a@cluster0.tnvtjod.mongodb.net/food-del').then (()=>console.log("DB connected"))
 };


