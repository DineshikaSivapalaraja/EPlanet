import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './Reg_Log.css'


export const Register = (props) => {
    
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [cpass, setCpass] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="form">
            <h2>Register to EPlanet</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <div className="logrow1">
         <div className="logcol1"><label htmlFor="fname">First Name:</label></div>
        <div className="logcol2">
            <input value={fname} name="fname" onChange={(e) => setFname(e.target.value)} id="fname" placeholder="First Name" />
        </div>  
        </div>

        <div className="logrow1">
         <div className="logcol1"><label htmlFor="lname">Last Name:</label></div>   
         <div className="logcol2"> 
            <input value={lname} name="lname" onChange={(e) => setLname(e.target.value)} id="lname" placeholder="Last Name" />
         </div>
        </div>
         
        <div className="logrow1">
         <div className="logcol1"> <label htmlFor="email">Email:</label> </div>
         <div className="logcol2">
              <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
         </div>
        </div>

        <div className="logrow1">
         <div className="logcol1"><label htmlFor="password">Password:</label></div>
         <div className="logcol2">
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
         </div>
        </div>

        <div className="logrow1">
         <div className="logcol1"><label htmlFor="cpassword">Confirm password:</label></div>
         <div className="logcol2">
            <input value={cpass} onChange={(e) => setCpass(e.target.value)} type="password" placeholder="********" id="cpassword" name="cpassword" />
        </div>
        </div>
    
        <div class="button">
                <input type="submit" value="Register" name="submit"/>
         </div>     
          
         <div className ="link-btn">
            <Link to="/login"><span className="pro">Have an account? Login here.</span></Link>
        </div>

        </form>
        
        </div>
    )
}
export default Register;