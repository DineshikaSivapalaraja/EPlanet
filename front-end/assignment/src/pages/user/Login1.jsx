import React from 'react';
import {Link} from 'react-router-dom';
import './Login1.css'
  
class LoginForm extends React.Component {
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
  
        let input = {};
        input["email"] ="";
        input["password"] = "";
        this.setState({input:input});

        //alert('Login Form is submitted');
       
  }
}
   
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;

      // if(!input["email"] && !input["password"]){
      //   errors["email"] = "Enter your Email.";
      //   errors["password"] = "Enter your Password.";

      // }
   
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Enter your Email.";
      }

      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Enter your Password.";
      }
      

      if (typeof input["email"] !== "undefined") {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Enter valid Email.";
        }
      }
     
      if (typeof input["password"] !== "undefined") {
      if(input["password"].length < 8){
            isValid = false;
            errors["password"] = "Insert at least 8 characters.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
      
  }


     
  render() {
    return (
      <div className = "form">
        
        <form className="login-form" onSubmit={this.handleSubmit}>
        <h1>Login to EPlanet</h1>
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

          <div class="button">
                <input type="submit" value="Login" name="submit"/>
         </div>        
         
        <div className="link-btn">
        <span className = "pro">Do not Have an Account?
        <Link to='/register'><span> Register</span> </Link>
        </span>           
       </div>  
        </form>
      </div>
    );
  }
}

  
export default LoginForm;