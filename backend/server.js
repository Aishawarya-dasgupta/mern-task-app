const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

//Routes
app.get('/',(req,res)=>{
    res.send("<h2>This is the app base url</h2>")
})
app.post('/tasks',(req,res)=>{
    res.send("<h2>This is the tasks post url</h2>")
})

app.listen(PORT,(req,res) =>{
    console.log(`server is listening on port ${PORT}`);
})

