import asyncHandler from "../utils/asyncHandler.js";
import {User} from "../models/user.models.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Contact } from "../models/contact.models.js";

const generateAccessToken = async(userId) =>{
    try{
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
       
        await user.save({ValidateBeforeSave:false})

        return {accessToken}
    }

    catch(err){
        throw new ApiError(400,err.message)
    }
}



const registerUser = asyncHandler(async(req,res)=>{
    const {fullName,email,password,category,phoneNumber} = req.body;
    console.log(req.body);

    if(!fullName || !email || !password || !category || !phoneNumber){
        throw new ApiError(400,"all fields are required ");
    }

    const user = await User.create({
        email,
        password,
        category,
        fullName,
        phoneNumber 
    })
    console.log(user);
    const createdUser = await User.findById(user._id)
    

    const {accessToken} = await generateAccessToken(user._id)

    res.status(200)
    .cookie("accessToken",accessToken)
    .json(new ApiResponse(200,createdUser,"user registeredSuccessfully"));
    

})

const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);

    if(!email || !password){
        throw new ApiError(400,"all fields are required ");
    }
   
    
    const user = await  User.findOne({
        $or:[{email}]
    })

    console.log(user)


    if(!user){
        throw new ApiError(400,user,"Requested user doesnt exists");
    }
    
    const isPasswordValid = user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(400,"Please enter the valid password")
    }


    const {accessToken} = await generateAccessToken(user._id)
    const foundUser = await User.findById(user._id).select('-password');
    res.status(200)
    .cookie("accessToken",accessToken)
    .json(new ApiResponse(200,foundUser,"user loogedInSuccessfully"));
    

})


const postContact = asyncHandler(async(req,res)=>{
   // console.log(req.body);
    const {message,email,name} = req.body;

    if(!message){
        throw new ApiError(400,"post commented out successfully ");
    }

    const contact = await Contact.create({
        email,
        message,
        name,}
    )
    console.log(contact)

    return res.status(200)
    .json(new ApiResponse(200,contact,"contacted succesfully"))


})


export {registerUser,loginUser,postContact}

