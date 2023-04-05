import React, { useEffect } from 'react'
import './AdminLogin.css'
import {Link, useHistory} from 'react-router-dom';

export default function AdminLogin() {
const history = useHistory();

  function handleClick() {
    history.push('/card');
  }

    
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
                        <input type="text" id='uname' placeholder="Your username.." required />
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
                    <button class ="button-30" type="button" onClick={handleClick} >Login</button>
                    
                    {/* <div class="logbutton">
                    <input type="submit" value="Login" name="submit"/>
                    </div> */}
                
                
                </form>
                <div class="forget">
                    <Link to='#'><span>Forget Password</span></Link>
                </div>
            </div>
        </div>
   
   </>
  )
}
