import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { userRouter} from  './routes/users.js';
import { recipesRouter} from  './routes/recipes.js';
// const dotenv = require("dotenv");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes",  recipesRouter);

mongoose.connect("mongodb+srv://rohit:rohit101@cluster0.krt56yn.mongodb.net/12-1AM?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{console.log("Connection Successfully...!");}
).catch((e)=>{
    console.log(e);
});

app.listen(PORT, ()=>console.log("Server Started...!")) 
