import React, { useState } from "react";
import {Link} from 'react-router-dom';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form">
            <h2>Login to EPlanet</h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <div className="logrow1">
             <div className="logcol1"><label htmlFor="email">Email</label></div>
             <div className="logcol2">   
               <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
             </div>
            </div>

            <div className="logrow1">
             <div className="logcol1"><label htmlFor="password">Password</label></div>
            <div className="logcol2">
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
             </div>
             </div>
              
               
         <div class="button">
                <input type="submit" value="Login" name="submit"/>
         </div>        
          
         <div className="link-btn">
            <Link to="/register"><span className = "pro">&nbsp;No account? Register here.</span></Link>
         </div>      
                
        </form>
      
        </div>
    )
}
export default Login;