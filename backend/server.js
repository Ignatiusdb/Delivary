import express from "express"
import cors from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"
import userRouter from "./routes/userRoutes.js"
import "dotenv/config.js"
import cartRouter from "./routes/cartRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

const app= express()

const port = 3014

app.use(express.json())

app.use(cors())

connectDB()

app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use ("/api/user",userRouter)
app.use ("/api/cart",cartRouter)
app.use ("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
}) 



app.listen(port,()=>{
    console.log(`server running on ${port} `);
})

// mongodb+srv://ignatiusdb57:S9I6A4fXkcHtIE6a@cluster0.tnvtjod.mongodb.net/ecommerce