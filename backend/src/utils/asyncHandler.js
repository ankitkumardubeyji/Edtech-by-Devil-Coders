
// asyncHandler returns a function ie the actual middleware function 

const asyncHandler = (fn) =>  // taking a function as the input
    
  // wrapping the fxn inside async , try catch block  
    async(req,res,next) => {
        try{
           await fn(req,res,next); // executing the function
        }
        catch(err){
            res.status(err.status || 400).json({
                success:false,
                message:err.message+" "+err.stack
            })
        }
    }


export default asyncHandler;