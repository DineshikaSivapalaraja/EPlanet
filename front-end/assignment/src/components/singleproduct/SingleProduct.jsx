import { useState, useEffect } from 'react';
import {Link,  useLocation} from 'react-router-dom';
import axios from 'axios';


const SingleProduct =() => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const productId = new URLSearchParams(location.search).get("productId");
  console.log(productId);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/get?productId=${productId}`);
        setProduct(response.data);
        console.log(response);
       
      } catch (error) {
        console.error(error);
        console.log(error);
       
      }
    };
    fetchData();
  }, [productId]);

  const handleAddToCart = async()=>{

    const cartId = 3;
    const productQuantity = 1;
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/cart/add-item?cartId=${cartId}&productId=${productId}&quantity=${productQuantity}`);
        console.log(response);
       
      } catch (error) {
        console.error(error);
        console.log(error);
       
      }
    };
    fetchData();

  }


if(!product){
    return(
      <>
   
      <div className="singleproduct">

        <h2>Nothing to display</h2>
      </div>
        
    </>
    )
}
 
  return (
    <>
   
      <div className="singleproduct">

        <div className="singletop">
          <div className="singleimg">
            <img src={product.image_url} alt=''/>
          </div>
          <div className="single-detail">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className='singleprice'>
                <h4>Rs. {product.price}.00 </h4>             
            </div>
            <div className="singbtn">
              <div className="singbtnsub">
                <button className='singcartbtn' onClick={handleAddToCart}>Add to Cart</button>
              </div>
              <div className="singbtnsub">
                <Link to='/' > <button className='contshopbtn'>Continue Shopping</button></Link>
              </div>
            </div>

          </div>
        </div>
      </div>
        
    </>
    
  )

}

export default SingleProduct
