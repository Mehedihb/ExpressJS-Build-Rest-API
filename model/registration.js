  // Step 1: Importing Mongoose
  const mongoose = require ('mongoose')
 
  // Step 2: Now Creating Schema
  const registrationSchema = new mongoose.Schema({
      name:{
          type:String,
          required: true
      },
      email:{
          type:String,
          required: true
      },
      age:{
          type:Number
      },
      city:{
          type: String
      },
      country:{
          type:String
      }
  })

  // Step 3: Now We Creating Model
  const UserCollection = new mongoose.model('User', registrationSchema)

  // Step 4: Now We Need To Export
  module.exports = UserCollection