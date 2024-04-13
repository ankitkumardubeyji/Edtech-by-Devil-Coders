import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";




const Login=()=>
{
  return (
    <div className="border  rounded-5" >
    
    <section   className="w-100 p-4 d-flex justify-content-center pb-4">
      <div  style={{'width': '26rem',  margin :"10px"}} className="backimg">
        {/* <!-- Pills navs --> */}
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-pill-init="" href="http://localhost:3000/login" role="tab" aria-controls="pills-login" aria-selected="true" data-mdb-tab-initialized="true">Login</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="tab-register" data-mdb-pill-init="" href="http://localhost:3000/sign" role="tab" aria-controls="pills-register" aria-selected="false" data-mdb-tab-initialized="true" tabIndex="-1">Register</a>
          </li>
        </ul>
        {/* <!-- Pills navs --> */}

        {/* <!-- Pills content --> */}
        <div className="tab-content">
          <div className="tab-pane fade active show" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                <FaFacebook />
                </button>

                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                <FaGoogle />
                </button>

                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                <CiTwitter />
                </button>

                <button type="button" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-link btn-floating mx-1" data-mdb-button-initialized="true">
                <FaGithub />
                </button>
              </div>

              <p className="text-center">or:</p>

              {/* <!-- Email input --> */}
              <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                
                <label className="form-label" htmlFor="loginName" style={{marginLeft:' 0px'}}>Email or username</label>
                <input type="email" id="loginName" className="form-control"/>
              <div className="form-notch"><div className="form-notch-leading" style={{'width': '9px'}}></div><div className="form-notch-middle"  style={{width: "114.4px"}}></div><div className="form-notch-trailing"></div></div></div>

              {/* <!-- Password input --> */}
              <div data-mdb-input-init="" className="form-outline mb-4" data-mdb-input-initialized="true">
                
               
                <label className="form-label" htmlFor="loginPassword" style={{ marginLeft: "0px"}}>Password</label>
                <input type="password" id="loginPassword" className="form-control"/>
              <div className="form-notch"><div className="form-notch-leading" style={{width: "9px"}}></div><div className="form-notch-middle"   style={{width: "64.8px"}}></div><div className="form-notch-trailing"></div></div></div>

              {/* <!-- 2 column grid layout --> */}
              <div className="row mb-4">
                

                <div className="col-md-6 d-flex justify-content-center">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" data-mdb-button-init="" data-mdb-ripple-init="" className="btn btn-primary btn-block mb-4" data-mdb-button-initialized="true">Sign in</button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>Not a member? <a href="http://localhost:3000/sign">Register</a></p>
              </div>
            </form>
          </div>
          
        </div>
       
      </div>
    </section>

    
    
    
    
    
    
  </div>
  )
}
export default Login;