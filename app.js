const express = require ('express')
const app = express();
require('dotenv').config({path: './config.env'})
const port = process.env.PORT || 3000
require('./db/database')


app.get('/',(req, res )=>{
    return res.json({
        code: 200,
        data:{
            name:"Mehedi Hassan"
        }
    })
})

app.use(express.json());

app.listen(port, ()=>{
    console.log(`Lestning Port at ${port}`)
})

