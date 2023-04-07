import React from "react";
import "./Otpcode.css";
import axios from 'axios';

export const OTPInput = () => {
  const handleSubmit = async (e) => {
    console.log(inputs);
    e.preventDefault();
    const email = localStorage.getItem('email');
    const otp = Array.from(document.querySelectorAll("input"))
                  .reduce((acc, input) => acc + input.value, '');
    try {
      const response = await axios.post(`http://localhost:8080/auth/verify?email=${email}&otp=${otp}`);
      console.log(response);
      window.location.href="/login"
    } catch (error) {
      console.log(error);
    }
  };

  const inputs = Array.from({ length: 6 }, (_, i) => i + 1)
                      .map((i) => <input key={i} type="number" />);
    
  return (
    <div className="build">
      <div className="con">
        <h3>Verify your Account <br/>Enter OTP</h3>
        <form action="#" className="vform" onSubmit={handleSubmit}>
          <div className="insert-field">
            {/* {inputs} */}
            <input type="text" value="" />
          </div>
          <input type="submit" value="Verify OTP" id="verifyB" />
        </form>
      </div>
    </div>
  );
};

export default OTPInput;
