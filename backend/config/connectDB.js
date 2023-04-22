const mongoose = require('mongoose')



const connectDB = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected to:" +connect.connection.host.toString())
    }
    catch(e) {
        console.log(e)
        process.exit(1)
    }
}





module.exports = connectDB



//Method 2: of connecting db and starting the server . We can simply write this code in the server.js file to connect the database and then startServer function wont be required

// const mongoose = require('mongoose')

// mongoose
//     .connect(process.env.MONGO_URI)
//     .then(() =>{
//         app.listen(PORT,(req,res) =>{
//             console.log(`server is listening on port ${PORT}`);
//         });

//     })
//     .catch((err)=>console.log(err));