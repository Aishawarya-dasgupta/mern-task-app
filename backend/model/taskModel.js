const mongoose = require('mongoose')


const taskSchema = mongoose.Schema ({
        name:{
            type: String,
            required: [true,"Please add a task"]
        },
        completed:{
            type:Boolean,
            required:[true,"Enter completed"],
            default: false
        },
    },
    {
        timeStamps: true,
    }
)

const Task = mongoose.Model('Task', taskSchema)
module.exports = Task
