import mongoose from "mongoose";



// always enclose the database in try/catch and async 

export const connectDb= async()=>{
    try{
        const connect = await mongoose.connect(`${process.env.MONGOURI}/Edtech`,{
            writeConcern:{w:'majority'},
        })
        console.log(`Connected successfully to the database ${connect.connection.host}`)
    }
    catch(error){
        console.log("Some error occured in connecting database "+error)
        process.exit(1)
    }
}

