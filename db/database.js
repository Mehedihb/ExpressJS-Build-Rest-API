const mongoose = require('mongoose')
require('dotenv').config({path: "./config.env"})
const DB = process.env.DATABASE
mongoose.connect(DB).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(`Database Not Connected. Error is: ${err}`)
})

