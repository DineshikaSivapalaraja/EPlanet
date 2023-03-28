import React from 'react'
import "./AboutContact.css";

export default function Contact() {
  return (
    <>
     <section className='contact-top'>
     <div className="about-top">
            <div className="cont-left">
            <img src='./images/contac.png' alt='' width="100%"/>
            </div>
            <div className="cont-right">
              <h3>Address : No. 143D, Victoria Avenue, Colombo 07.</h3>
              <h3>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : ePlanet@gmail.com</h3>
              <h3>Phone &nbsp;&nbsp;&nbsp;&nbsp;: +1 1231 287 465</h3>                           
            </div>
        </div>
        <div className="conform">
          <div className="cont">
              <h1>Give us Your Feedback !</h1>
          <form>
            <table>
              <tr>
                <td> <label className='lab'>Username:  </label></td>
               
                <td> <input type="text" name="name"/></td>
              </tr>
              <tr>
                <td><label className='lab'>Message &nbsp;:  </label></td>
              
                <td><textarea name="msg"  placeholder="enter your message" cols="40" rows="10"></textarea></td>
              </tr>
            </table>
            <input type="submit" value="Submit" className='subbtn'/>
        </form>
          </div>
          
        </div>
     </section>
    </>
   
  )
}
