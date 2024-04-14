import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "../style/sign.css";
import { useNavigate } from "react-router-dom";

const  Sign= ()=>{

  const navigate = useNavigate()

   const users={
       username:"",
       email:"",
       profession:"",
       qualification:"",
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
      axios.get("http://localhost:8050/api/getall")
       .then((response)=>{
           console.log(response)
           const exists=response.data.filter((data)=>data.email===user.email);
        
           if(exists.length>0){
            alert(`email alreary exit`);
           }
           else{
            axios.post("http://localhost:8050/api/create",user)
            .then((response)=>{
                
                toast.success(response.data.msg,{position :"top-right"});
                console.log(response);
                navigate("/login")
              
                
            })
            .catch(error=>console.log(error));
           }


         
           
           
           
         
           
       })
       .catch(error=>console.log(error));

      

    }

   return(
      

       <div className="container d-flex justify-content-center maincontainer ">
           <form className="wave " onSubmit={submitForm}>
               <div className="d-flex justify-content-center">
                   <span className="boldsign">SIGN UP</span>
               </div>
               <div className="d-flex justify-content-center">
                   <span className="">create your account</span>
               </div>
               
               <div  className="d-flex flex-column mt-3">
                   <label htmlFor="">Username</label>
                   <input  onChange={inputhandler} name="username" id="username"   autoComplete="off"    className="inputfield" type="text" />
               </div>
               <div  className="d-flex flex-column mt-3">
                   <label htmlFor="">Email</label>
                   <input  onChange={inputhandler} name="email" id="email"   autoComplete="off" className="inputfield" type="email" />
               </div>
               <div  className="d-flex flex-column mt-3">
                   <label htmlFor="">Profession</label>
                   <select class="form-select" onChange={inputhandler} name="profession" id="profession" aria-label="Default select example">
               <option selected > select </option>
              <option  value="student">Student</option>
               <option value="admin">Admin</option>
             
               </select>
               </div>
               <div  className="d-flex flex-column mt-3">
                   <label htmlFor="">Qualification</label>
                   <select class="form-select" onChange={inputhandler} name="qualification" id="qualification"   aria-label="Default select example">
               <option selected> select </option>
              <option value="12 th Pass">12 th Pass</option>
               <option value="Graguate">Graguate</option>
             
               </select>
               </div>
               
               <div  className="d-flex flex-column mt-3">
                   <label htmlFor="">Password</label>
                   <input  onChange={inputhandler} name="password" id="password"   autoComplete="off" className="inputfield" type="password" />
               </div>
               <div  className="d-flex flex-column mt-3">
                   <label htmlFor="">Re-password</label>
                   <input   name="repassword" id="repassword"   autoComplete="off" className="inputfield" type="password" />
               </div>
              
               
               <button  className="signbutton" type="submit ">Sign up</button>
               <div className="d-flex justify-content-center pt-2">
                   <span className="">or</span>
               </div>
              <div className="d-flex justify-content-center pt-2">
                   <span className="bg-green">Alreary have an account?</span>
                   <a href="#" className="signinbutton">Sign in</a>
                   {/* <button type="button" className="signinbutton" ></button> */}
               </div>
           </form>
           

       </div>
      
   )
}
export default Sign;