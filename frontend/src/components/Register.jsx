

import {useState} from "react"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createAccount } from "../Reducer/authSlice";


function Register(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    


  const [signupData,setSignupData] = useState({
    fullName:"",
    email:"",
    password:"",
    category:"",
    phoneNumber:"",              
  })

  function handleUserInput(e){
    // extracting the property that has been modified
    const {name,value} = e.target; 
    setSignupData({
        ...signupData,
        [name]:value 
    })
  }



 


  async function createNewAccount(e){
        e.preventDefault()
        if(!signupData.email || !signupData.password || !signupData.fullName || !signupData.username){
            toast.error("please fill all the details")
        }

        if(!signupData.email.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            toast.error("Invalid email id ")
          }
      
          if (!signupData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
            toast.error(
              "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
            );
            return;
          }

          const formData = new FormData()
          formData.append("fullName",signupData.fullName)
          formData.append("email",signupData.email)
          formData.append("password",signupData.password)
   
          formData.append("category",signupData.category)
          formData.append("phoneNumber",signupData.category)

          setSignupData(
            {
                fullName:"",
                email:"",
                password:"",
                category:"",
                phoneNumber:"",
               
            }
          )


        const response = dispatch(createAccount(formData))
        console.log(response)
            if(response){
                navigate("/")
            }
    }

 
    

  

  
  

    return(
    <>

    <div className="row" style={{display:"flex", gap:"10px"}}>
        <div className="left">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
 

</div>
        </div>
   

    <div className="flex min-h-full flex-col justify-center px-6 py-2 lg:px-8" style={{margin:"auto"}}>
 

  <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <form noValidate onSubmit={createNewAccount} className="space-y-6" action="/api/users/register" method="POST"> 
        {/* no validate to stop the html validations */}

    <div>
        <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">fullName </label>
        <div className="mt-1">
          <input id="fullName" name="fullName" type="text" autoComplete="fullName" required className="block w-full 
          rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUserInput} value={signupData.fullName}/>
        </div>
      </div>



      <div>
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-1">
          <input id="email" name="email" type="email" autoComplete="email" required className="block w-full 
          rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUserInput} value={signupData.email}/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
        </div>
        
        <div className="mt-1">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded
          -md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring
          -inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUserInput} value={signupData.password}/>
        </div>
      </div>

     
    <div>
        <label htmlFor="category" className="block text-sm font-medium leading-6 text-gray-900">Category </label>
        <div className="mt-1">
          <input id="category" name="category" type="text" autoComplete="category" required className="block w-full 
          rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUserInput} value={signupData.category}/>
        </div>
      </div>

     

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">phoneNumber </label>
        <div className="mt-1">
          <input id="phoneNumber" name="phoneNumber" type="text" autoComplete="category" required className="block w-full 
          rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 
          focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={handleUserInput} value={signupData.phoneNumber}/>
        </div>
      </div>

      <div>


        <button className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
      </div>
    </form>

    <p className="mt-5 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-red-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>
</div>
</>
)
}


export default Register;