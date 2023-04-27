const express = require('express')
const Task = require('../model/taskModel')
const router = express.Router()


//Routes
router.get('/',(req,res)=>{
    res.send("Home Page")
})
//Create a task
router.post('/api/tasks', async(req,res)=>{
    //console.log(req.body)
    //res.send("task created")
    try{
        const task  = await Task.create(req.body)
        res.status(201).json(task)
    }catch(err){
        res.status(500).json({"error":err})
    }
})

//GET/Read Tasks 
router.get('/api/tasks', async(req,res)=>{
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({"error":err})
    }
})



module.exports = router