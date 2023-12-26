//1.import mongoose

const mongoose = require('mongoose')

//2.define connection string b/w mongoose and express
mongoose.connect('mongodb://localhost:27017/Gallery')


//3.create a model and schema for sharing data b/w mongodb and express
const User=mongoose.model('User',{   //model-User 
    //schema
   id:Number,
   password:String,
   name:String,
   images:[]
})

   //export the collection

   module.exports={
       User
   }