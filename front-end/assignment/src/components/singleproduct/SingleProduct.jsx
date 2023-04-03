import React from 'react'
import {Link} from 'react-router-dom';


const SingleProduct =() => {
  const Singdata = [

      {
        id: 20,
        discount: 30,
        cover: "./images/flash/rolex.jpeg",
        desc: "40mm Stainless Steel Engraved Rehaut Box and Papers,Listing code:	E32EK3, Brand	Rolex,Model:	Submariner Date, Movement: Automatic, Case material:	Steel,Bracelet material:	Steel, Year of production:	2010",
        name: "Rolex Submariner Date",
        price: 25600,
      },
  ]
  
 
  return (
    <>
   
      <div className="singleproduct">
       

        {Singdata.map((value, index) => {
          return (
        <div className="singletop">
          <div className="singleimg">
            <img src={value.cover} alt=''/>
          </div>
          <div className="single-detail">
            <h2>{value.name}</h2>
            <p>{value.desc}</p>
            <div className='singleprice'>
                <h4>Rs. {value.price}.00 </h4>             
            </div>
            <div className="singbtn">
              <div className="singbtnsub">
                <button className='singcartbtn'>Add to Cart</button>
              </div>
              <div className="singbtnsub">
                <Link to='/' > <button className='contshopbtn'>Continue Shopping</button></Link>
              </div>
            </div>

          </div>
        </div>
        )
        }
      )}
      </div>
        
    </>
    
  )

}

export default SingleProduct
