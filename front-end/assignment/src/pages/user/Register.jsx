import React from 'react';
import {Link} from 'react-router-dom';
import './Login1.css'

  
class RegisterForm extends React.Component {
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {}
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
    
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);
        const { firstname,lastname,email, password } = this.state.input;
        const data = { firstname,lastname,email, password };
        localStorage.setItem('email', email);

        console.log(data);
      
      const response = fetch('http://localhost:8080/auth/user-register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      
        // this.props.history.push('/');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
        let input = {};
        input["firstname"] = "";
        input["lastname"] = "";
        input["email"] = "";
        input["password"] = "";
        input["cpassword"] = "";
        this.setState({input:input});

        window.location.href="/otp"
  
        // alert('Registration Form is submitted');
    }
  }  
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
  
      if (typeof input["firstname"] !== "undefined") {
        const re = /^\S*$/;
        if (!input["firstname"]) {
          isValid = false;
          errors["firstname"] = "Enter your First Name.";
        }
        else if(input["firstname"].length < 5 || !re.test(input["firstname"])){
            isValid = false;
            errors["firstname"] = "Firstname should have atleast five characters and cannot contains numbers";
        }
      }

    
      if (typeof input["lastname"] !== "undefined") {
        const re = /^\S*$/;
        if (!input["lastname"]) {
          isValid = false;
          errors["lastname"] = "Enter your Last Name.";
        }
    
        else if(input["lastname"].length < 5 || !re.test(input["lastname"])){
            isValid = false;
            errors["lastname"] = "Lastname should have atleast five characters and cannot contains numbers.";
        }
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!input["email"]) {
          isValid = false;
          errors["email"] = "Enter your Email.";
        }
        else if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Enter valid Email.";
        }
      }
  
  
      if (typeof input["password"] !== "undefined" || typeof input["cpassword"] !== "undefined") {

        if (!input["password"]) {

          if (!input["cpassword"]) {
            isValid = false;
            errors["cpassword"] = "Enter Confirm Password.";
          }

          isValid = false;
          errors["password"] = "Enter your Password.";
        }

        else if(input["password"].length < 8){
            isValid = false;
            errors["password"] = "Insert at least 8 characters.";
        }

        else if (!input["cpassword"]) {
          isValid = false;
          errors["cpassword"] = "Enter Confirm Password.";
        }
      
      }

  
      if (typeof input["password"] !== "undefined" && typeof input["cpassword"] !== "undefined") {
      
      if (input["password"] != input["cpassword"]) {
          isValid = false;
          errors["password"] = "Passwords don't match.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
      
  }
     
  render() {
    return (
      <div className= "form">
        
        <form className="register-form" onSubmit={this.handleSubmit}>
        <h1>Register to EPlanet</h1>
        <div className="logrow1">
        <div className="logcol1"><label for="firstname">First Name:</label></div>
        <div className="logcol2">
            <input 
              type="text" 
              name="firstname" 
              value={this.state.input.firstname}
              onChange={this.handleChange}
              placeholder="First Name" 
              id="firstname" />
        </div>
        <div className="alert">{this.state.errors.firstname}</div>
        </div>

        <div className="logrow1">
        <div className="logcol1"><label for="lastname">Last Name:</label></div>
        <div className="logcol2">
          <input 
            type="text" 
            name="lastname" 
            value={this.state.input.lastname}
            onChange={this.handleChange}
            placeholder="Last Name" 
            id="lastname" />
        </div>
        <div className="alert">{this.state.errors.lastname}</div>
        </div>
  
        <div className="logrow1">
        <div className="logcol1"><label for="email">Email:</label></div>
        <div className="logcol2">
        <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              placeholder="Email" 
              id="email" />
        </div>
        <div className="alert">{this.state.errors.email}</div>
        </div>
  
        <div className="logrow1">
        <div className="logcol1"><label for="password">Password:</label></div> 
        <div className="logcol2">
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              placeholder="Password" 
              id="password" />
        </div>
  
        <div className="alert">{this.state.errors.password}</div>
        </div>
  
        <div className="logrow1">
        <div className="logcol1"><label for="cpassword">Confirm Password:</label></div> 
        <div className="logcol2">
          <input 
              type="password" 
              name="cpassword" 
              value={this.state.input.confirmpassword}
              onChange={this.handleChange}
              placeholder="Confirm Password" 
              id="cpassword" />
        </div>
  
        <div className="alert">{this.state.errors.cpassword}</div>
        </div>
        
        <div class="button">
          <input type="submit" value="Register" name="register"/>
        </div>     
          
        <div className ="link-btn">
       
        <span className="pro"> Already Have an Account?
            <Link to='/login'>  <span>Login</span> </Link>
        </span>
        </div>
        </form>
      </div>
    );
  }
}

  
export default RegisterForm;