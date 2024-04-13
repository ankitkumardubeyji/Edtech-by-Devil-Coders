import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// TODOA: must implement the search functionality based on the username
const contactSchema = new mongoose.Schema({
  

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true, 
    },

    name:{
        type:String,
        required:true,
        trim:true,
        index:true, 
    },


    message:{
        type:String,
        required:['true','password is required ']
        
    },


   

    
},{timeStamps:true})

export const Contact = new mongoose.model("Contact",contactSchema)