import React from "react";
import "./style.css"
import {Link  , useLocation} from 'react-router-dom';
import { useState, useEffect} from 'react';
import axios from 'axios';

const Shop3 = ({ productItems }) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/product/get-all");
                const data = await response.json();
                setProductList(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
      
            <div className="searchresultcont background">
                <div className="container d_flex">
                  <div className="contentWidth2">
                  <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                        <h2 id="searchid"><span>All Products</span></h2>
                    </div>
                    </div>
                    <div className="serachressub grid3">
                    {productList.map((productItem, index) => {
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

export default Shop3