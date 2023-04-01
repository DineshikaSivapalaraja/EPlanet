import React from "react";
import "./Popup.css"
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="popbox">
        <span className="pop-close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Popup;