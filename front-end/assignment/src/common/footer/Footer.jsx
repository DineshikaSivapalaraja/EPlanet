import React from "react"
import "./Footer.css"
import logo from "../assets/images/logo1.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='boxx'>
          <div className="logo">
                    <img src={logo} alt=""  width="60%"/>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='boxx'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='boxx'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='boxx'>
            <h2>Contact Us</h2>
            <ul>
              <li>No. 143D, Victoria Avenue, Colombo 07. </li>
              <li>Email: ePlanet@gmail.com</li>
              <li>Phone: +1 1231 287 465</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer