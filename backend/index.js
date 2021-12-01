import express from "express"
import db from './config/db.js'
import dotenv from "dotenv"
import router from './routes/index.js'
import cors from "cors";
import cookieParser from "cookie-parser"
import Posts from "./models/PostModel.js";
dotenv.config()

const app = express()

try {
    await db.authenticate()
    console.log("DB Connected ke auth_node")
    // await Posts.sync();
} catch (error) {
    console.error(error)
}

app.use(cors({credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser())
app.use(express.json())
app.use(router);
app.listen(5000, ()=> console.log('Server Running di Port 5000'));