import mongoose from "mongoose";
const userscema=new mongoose.Schema(
    {
              username :
              {
                type:String,
                required :true

              },
              email :
              {
                type:String,
                required :true

              },
              profession :
              {
                type:String,
                required :true

              },
              qualification :
              {
                type:String,
                required :true

              },
              password :
              {
                type:String,
                required :true

              },
    }
)
export default mongoose.model("User",userscema);