const dotevn = require('dotenv').config();
const express = require('express')
const connectDB = require('./config/connectDB')
const Task = require('./model/taskModel')


const app = express()

const PORT = process.env.PORT || 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended:false}))
// const logger = async (req,res,next) => {
//     console.log("Middleware ran")
//     console.log(req.method)
//     next();
// }

//Routes
app.get('/',(req,res)=>{
    res.send("Home Page")
})

//Create a task
app.post('/api/tasks', async(req,res)=>{
    //console.log(req.body)
    //res.send("task created")
    try{
        const task  = await Task.create(req.body)
        res.status(201).json(task)
    }catch(err){
        res.status(500).json({"error":err})
    }
})

//GET/Read Data
app.get('/api/tasks', async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({"error":err})
    }
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
