import React, { useState } from "react";
import logo from "../assets/images/logo1.png";
import {Link} from 'react-router-dom';
import Popup from "../popup/Popup";
import axios from 'axios';

const Search = ({cartItem})=> {
    const username = localStorage.getItem('email');    
    const [searchTerm, setSearchTerm] = useState('');
   

    window.addEventListener("scroll", function() {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
     })

    
    const [showPopup, setShowPopup] = useState(false);
   
    const togglePopup = () => {
        setShowPopup(!showPopup);
    }

    const closePopup = () => {
        setShowPopup(false);
    }

    const logOutHandle = async () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('userId');
        console.log(localStorage.getItem('token'));
        try{
            const response= await axios.post('http://localhost:8080/auth/logout',{},{
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              }
            }
            );
            if(response.status===200){
              localStorage.removeItem('token');
              localStorage.removeItem('email');
              localStorage.removeItem('userId');
              window.location.href = '../pages/login';
            }
            else{
              console.log(response.data);
            }
            
          }catch(error){
            console.error(error);
          }
        }


       

   
    return (
        <>
         <section className="search">
            <div className="container c_flex">
                <div className="logo width">
                <Link to="/"> <img src={logo} alt=""/></Link>
                </div>
                <div className="search-box f_flex">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search here ..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                     <Link to={`/products?searchTerm=${searchTerm}`}>   <button >All Categories</button></Link>
                </div>
                <div className="icon f_flex width">
                <button onClick={togglePopup} className="userpop">
                     <i className="fa fa-user icon-circle"></i>
                </button>
               

                    {showPopup && <Popup
                    content={   <>
                       { username ? (
                            <div className="relobtn">
                            
                           <Link to="/login" className="loglink" onClick={logOutHandle}>Logout</Link>
                       </div>
                        ) : (
                            <div className="relobtn">
                             <Link to="/register" className="reglink" onClick={closePopup}>Register</Link>
                            <Link to="/login" className="loglink" onClick={closePopup}>Login</Link>
                        </div>
                        )}
                                    
                       
                       
                        
                    </>}
                    handleClose={closePopup}
                    />} 

                <div className="cart">
                    <Link to="/cart">
                        <i className="fa fa-shopping-bag icon-circle"></i>
                        <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                    </Link>
                </div>
                </div>
            </div>
           </section>
        </>
    )
}

export default Search



