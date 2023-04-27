const dotevn = require('dotenv').config();
const express = require('express')
const connectDB = require('./config/connectDB') 
const Task = require('./model/taskModel')
const taskRoute = require('./routes/taskRoute')


const app = express()

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended:false})) 
app.use(taskRoute)
// const logger = async (req,res,next) => {
//     console.log("Middleware ran")
//     console.log(req.method)
//     next();
// }

//Routes
app.get('/',(req,res)=>{
    res.send("Home Page")
})

const startServer = async() => {
    try{
        await connectDB()
        app.listen(PORT,(req,res) =>{
            console.log(`server is listening on port ${PORT}`);
        })
    }catch(error){
        console.log(error)
    }
}

startServer();
