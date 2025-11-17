import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin :process.env.ORIGIN_CORS,
    Credential: true   
}))

// 3 major express configurations of express 

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("Public"))

// cookieparser 

app.use(cookieParser())


// import routes 
import userRouter from "./routes/user.routes.js";



// routes delecrtions

app.use("/api/v1/users",userRouter)


export{app};
