import React from 'react'
import {Link} from 'react-router-dom';
import './Login1.css'

export default function Register() {
  return (
    <>
   <div className="logincls">
            <div className="loginbox">
                <h1>Register to EPlanet</h1>
                <form>
                    <div className="logrow1">
                        <div className="logcol1">
                            <label for="fmane">First name : </label>
                        </div>
                        <div className="logcol2">
                        <input type="username" id='fname' placeholder="First name.." required />
                        </div>
                    </div>
                    <div className="logrow1">
                        <div className="logcol1">
                            <label for="lmane">Last name : </label>
                        </div>
                        <div className="logcol2">
                        <input type="username" id='lname' placeholder="Last name.." required />
                        </div>
                    </div>
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
                    <input type="submit" value="Register" name="submit"/>
                    </div>
                
                
                </form>
               
                <div class="forget" >
                <span > Already Have an Account?</span>
                   
                <Link to='/login'>  <span>Login</span> </Link>
                   
         </div>
            </div>
        </div>
   
    </>
  )
}
