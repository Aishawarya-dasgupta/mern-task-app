const express = require('express')
const { createTask, readTask } = require('../controllers/taskController')
const router = express.Router()


//Routes
//Create a task
router.post('/api/tasks', createTask)
//GET/Read Tasks 
router.get('/api/tasks', readTask)



module.exports = router