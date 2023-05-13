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

const getTask = async (req, res) => {
    try{
        const {id} =req.params;  
        const task = await Task.findById(id)
        if(!task){
            res.status(404).json({"error":"No task found with id:"+id})
        }
        res.status(200).json(task)
    }
    catch(err)
    {
        res.status(500).json({"error":err})
    }
}


const deleteTask = async (req, res) => {
    try{
        const {id} = req.params;
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.status(404).json({"error":"No task found with id:"+id})
        }
        res.status(200).send("Task Deleted")
    }
    catch(err){
        res.status(500).json({"error":err})
    }

}

const updateTask = async(req,res) => {
    try{
        const {id}= req.params;
        const task = await Task.findByIdAndUpdate(
            {_id:id},req.body,{
                new:true,
                runValidators:true,
            }
        )
        if(!task){
            res.status(404).json({"error":"No task found with id:"+id})
        }
        res.status(200).json(task)
    }catch(err){
        res.status(500).json({"error":err})
    }
}





module.exports = {
    createTask,
    readTask,
    getTask,
    deleteTask,
    updateTask
}