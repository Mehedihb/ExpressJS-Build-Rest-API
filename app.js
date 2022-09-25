const express = require ('express')
const app = express();
require('./config/database')
const port = 3000;









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

