import React from 'react'
import './Login1.css'
import {Link} from 'react-router-dom';

export default function Login1() {
  return (
    <>
        <div className="logincls">
            <div className="loginbox">
                <h1>Login</h1>
                <form>
                    <div className="logrow1">
                        <div className="logcol1">
                            <label for="umane">Username : </label>
                        </div>
                        <div className="logcol2">
                        <input type="username" id='uname' placeholder="Your username.." required />
                        </div>
                    </div>
                    <div className="logrow1">
                        <div className="logcol1">
                            <label for="password">Password : </label>
                        </div>
                        <div className="logcol2">
                        <input type="password" id='password' placeholder="Your password.." required/>
                        </div>
                    </div>
                    <div class="logbutton">
                    <input type="submit" value="Login" name="submit"/>
                    </div>
                
                
                </form>
                <div class="forget">
                    <Link to='#'><span>Forget Password</span></Link>
                </div>
                <div class="forget" >
                <span >Do not Have an Account?</span>
                   
                <Link to='/register'>   <span> Register</span> </Link>
                   
         </div>
            </div>
        </div>
   
   </>
  )
}
