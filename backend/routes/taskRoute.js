const express = require('express')
const { createTask, readTask, getTask, deleteTask, updateTask } = require('../controllers/taskController')
const router = express.Router()


//Routes
// router.route("/").post(createTask).get(readTask)
// router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)
//Create a task
router.post('/', createTask)
//Read Tasks 
router.get('/', readTask)
//Get Tasks
router.get('/:id',getTask)
//Delete Tasks
router.delete('/:id', deleteTask)
//Update Tasks
router.put('/:id', updateTask)


module.exports = router