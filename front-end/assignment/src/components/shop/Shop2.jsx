import React from "react";
import ShopCart from "./ShopCart"
import "./style.css"
import {Link  , useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';

const Shop2 = ({ productItems }) => {
    const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get("searchTerm");
  //console.log(searchTerm);
  const [searchResults, setSearchResults] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            console.log(searchTerm);
            try {
              const response = await axios.get(
                `http://localhost:8080/product/search-name?name=${searchTerm}`
              );
              //console.log(`http://localhost:8080/product/search-name?name=${searchTerm}`);
              setSearchResults(response.data);
              console.log(searchResults);
        
            } catch (error) {
              console.error(error);
            }   };    

        fetchData();
    }, []);




    return (
        <>
      
            <div className="searchresultcont background">
                <div className="container d_flex">
                  <div className="contentWidth2">
                  <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                        <h2 id="searchid">Search Results For : <span>{searchTerm}</span></h2>
                    </div>
                    </div>
                    <div className="serachressub grid3">
                    {searchResults.map((productItem, index) => {
                      return(
                      <div className='box'>
                          <div className='product mtop'>
                              <div className='img' width="40px">
                                  {/* <span className='discount'>{shopItems.discount}% Off</span> */}
                                  <Link to={`/singleproduct?productId=${productItem.id}`}><img src={productItem.image_url} alt='' className="shopProImg"/></Link> 
                              </div>
                              <div className='product-details'>
                                  <h3>{productItem.name}</h3>
                                  <div className='rate'>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                      <i className='fa fa-star'></i>
                                  </div>
                                  <div className='price'>
                                      <h4>Rs. {productItem.price}.00 </h4>
                                    
                                      <button>
                                        <i className='fa fa-plus'></i>
                                      </button>
                                  </div>
                              </div>
                          </div>
                        </div>
                         )
                        })}
                      </div>
                    </div>
                </div>
            </div>
            
         
      </>
    )
}

export default Shop2