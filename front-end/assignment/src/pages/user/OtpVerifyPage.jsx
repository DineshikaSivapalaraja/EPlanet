import React from "react";
import "./Otpcode.css";

export const OTPInput = () => {
const inputs = document.querySelectorAll("input"),
      button = document.querySelector("button");

    
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

window.addEventListener("load",() => inputs[0].focus());


return(
<div className = "build">
<div className="con">
<h3>Verify your Account <br/>Enter OTP</h3>
<form action="#" className="vform">
    <div class = "insert-field">
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
export default OTPInput;