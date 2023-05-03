const Task = require('../model/taskModel')

const createTask = async (req,res) => {
    try{
        const task  = await Task.create(req.body)
        res.status(201).json(task)
    }catch(err){
        res.status(500).json({"error":err})
    }
}

const readTask = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({"error":err})
    }
}

module.exports = {
    createTask,
    readTask
}