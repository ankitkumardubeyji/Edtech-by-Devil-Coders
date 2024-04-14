 import { useState } from "react";
 import axios from "axios";
 import toast from "react-hot-toast";
 import "../style/login.css";
import { useNavigate } from "react-router-dom";
 
 const  Login= (props)=>{
    
        const navigate=useNavigate()
    const [error,setError]= useState(false)
    const [wrong,setWrong]= useState(false)
    const users={
        
        email:"",
       
        password:"",
    }
    const [user,setUser]=useState(users);
    // const navigate=useNavigate();

    const inputhandler=(e)=>
    {
        const {name, value}=e.target;
        setUser({...user,[name]:value});
        console.log(user);


    }
     const submitForm= async (e)=>
     {
        
        e.preventDefault();
        await axios.get("http://localhost:8050/api/getall")
        .then((response)=>{
            console.log(response)
            const verified=response.data.filter((data)=>data.email===user.email);
            console.log(verified)
            if(verified.length==0){
                setError(true)
            }
        
            else  if(verified[0].password===user.password){
             console.log("login");
                props.setIsLoggedIn(true)
             navigate("/")
}
             else{
                setWrong(true)
             }
            
            toast.success(response.data.msg,{position :"top-right"});
            
          
            
        })
        .catch(error=>console.log(error));

     }

    return(
       

        <div className="container  maincontainer ">
            <form className="wave " onSubmit={submitForm}>
                <div className="d-flex justify-content-center">
                    <span className="boldsign">SIGN IN</span>
                </div>
               
                
                
                <div  className="d-flex flex-column mt-3">
                    <label htmlFor="">Email</label>
                    <input  onChange={inputhandler} name="email" id="email"   autoComplete="off" className="inputfield" type="email" />
                </div>
               
                
                
                <div  className="d-flex flex-column mt-3">
                    <label htmlFor="">Password</label>
                    <input  onChange={inputhandler} name="password" id="password"   autoComplete="off" className="inputfield" type="password" />
                </div>
                
               
                
                <button  className="signbutton" type="submit ">Login</button>
                <div className="d-flex justify-content-center">
                <a href="#" className="">Forget Password?</a>
                </div>
               
               <div className="d-flex justify-content-center pt-2">
                    <span className="bg-green">Don't have an account?</span>
                    <a href="#" className="signinbutton">Sign up</a>
                    {/* <button type="button" className="signinbutton" ></button> */}
                </div>
            </form>

                {
                    error && (<h4 style={{font:'12px' ,color:'red', textAlign:'center', marginTop:'5px'}}> Invalid Email</h4>)
                }   


                   {
                    wrong && (<h4  style={{font:'12px' ,color:'red', textAlign:'center', marginTop:'5px'}} > Invalid Password</h4>)
                }        

        </div>
       
    )
}
export default Login;