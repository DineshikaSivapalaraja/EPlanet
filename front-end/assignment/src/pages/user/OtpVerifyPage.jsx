// import React from "react";
// import "./Otpcode.css";
// import axios from 'axios';

// export const OTPInput = () => {
//   const handleSubmit = async (e) => {
//     console.log(inputs);
//     e.preventDefault();
//     const email = localStorage.getItem('email');
//     const otp = Array.from(document.querySelectorAll("input"))
//                   .reduce((acc, input) => acc + input.value, '');
//     try {
//       const response = await axios.post(`http://localhost:8080/auth/verify?email=${email}&otp=${otp}`);
//       console.log(response);
//       window.location.href="/login"
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const inputs = Array.from({ length: 6 }, (_, i) => i + 1)
//                       .map((i) => <input key={i} type="number" />);
    
//   return (
//     <div className="build">
//       <div className="con">
//         <h3>Verify your Account <br/>Enter OTP</h3>
//         <form action="#" className="vform" onSubmit={handleSubmit}>
//           <div className="insert-field">
//             {/* {inputs} */}
//             <input type="text" value="" />
//           </div>
//           <input type="submit" value="Verify OTP" id="verifyB" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default OTPInput;

import React from "react";
import "./Otpcode.css";
import axios from 'axios';

export const OTPInput = () => {
const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");
      const email = localStorage.getItem('email')

    
inputs.forEach((input,index1) => { 
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
              nextInput = input.nextElementSibling,
              prevInput = input.previousElementSibling;
    
        if(currentInput.value.length > 1) {
            currentInput.value = " ";
            return;
        }
       
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "" ){
            nextInput.removeAttribute("disabled");
            nextInput.focus();  
        }
         
        if (e.key === "Backspace"){  
            inputs.forEach((input,index2) => {
                if(index1 <= index2 && prevInput){
                    input.setAttribute("disabled",true);
                    currentInput.value = "";
                    prevInput.focus();
                }
            });
        }
        if(!input[5].disabled && input[5].value !== ""){
            button.classList.add("active");
            return;
        }
        button.classList.remove("active");
    }); 
});

const handleSubmit = async (e) => {
    //
     
      e.preventDefault();
           const otp = Array.from(document.querySelectorAll("input"))
                    .reduce((acc, input) => acc + input.value, '');
         console.log(email,otp);
      try {
        const response = await axios.get(`http://localhost:8080/auth/verify?email=${email}&otp=${otp}`);
        console.log(response);
        localStorage.removeItem('email');
        window.location.href="/login"
      } catch (error) {
        console.log(error);
      }
    };

window.addEventListener("load",() => inputs[0].focus());


return(
<div className = "build">
<div className="con">
<h3>Verify your Account <br/>Enter OTP</h3>
<form action="#" className="vform" onSubmit={handleSubmit}>
    <div className = "insert-field">
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
        <input type="number" />
    </div>
    <button id="verifyB">Verify OTP</button>
</form>
</div>
</div>

);
}
export default OTPInput;
