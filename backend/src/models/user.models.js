import mongoose from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


// TODOA: must implement the search functionality based on the username
const userSchema = new mongoose.Schema({
  

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true, 
    },

    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true, 
    },


    password:{
        type:String,
        required:['true','password is required ']
        
    },

    category:{
        type: String,
        enum: ['child','adult'],  // to decide whether the entered user is admin user or the studnent
         required:true,
    },

    phoneNumber:{
        type:String,
        required:true 
    }

   

    
},{timeStamps:true})

// adding custom middlewares in the db , that will get executed just before some operations like save in the db

// the below middleware gets executed everytime data is saved in the db.
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }

    // whenever the password gets modified it gets decrypted and then saved in the database
    this.password = await bcrypt.hash(this.password,10);
})

// we can also define some methods to be performed on the documents present in the collection

// comparing the password passed and password of the current document saved in the db
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken = function(){
  // passing the data, secret and expiry duration to the jwt.sign
    return jwt.sign({
        _id:this._id,
        email:this.email,
        fullName:this.fullName, 
    },
    
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY, 
    }
    )
}



export const User = mongoose.model("User",userSchema) // we can extract all the functionality of the database using the User that exists in the left.

