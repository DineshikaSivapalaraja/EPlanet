import React, { useState } from "react";
import './Reg_Log.css';
import { Register } from "./Register";
import { Login } from "./Login";

function Reg_Log() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="reg_log">
      {
        currentForm === "register" ? <Register onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Reg_Log;
