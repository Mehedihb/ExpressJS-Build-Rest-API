const mongoose = require('mongoose')
    mongoose.connect("mongodb+srv://abcdcluster.dfq4f.mongodb.net/ExpressApi").then(()=>{
        console.log('Database Connected')
    }).catch((err)=>{
        console.log(`Database Not Connected & The Error Is: ${err}`)
    })

