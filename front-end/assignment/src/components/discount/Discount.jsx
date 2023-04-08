import React, { useState, useEffect } from "react"
import Dcard from "./Dcard"

const Discount = () => {

  const [discountList, setDiscountList] = useState([]);

  useEffect(() => {
      // const fetchData = async () => {
      //     try {
      //        const response = await fetch("http://localhost:8080/product/get-all");

      //         const data = await response.json();
      //         setDiscountList(data.slice(0, 6));
      //         console.log(discountList);

      //         console.log(data);
      //     } catch (error) {
      //         console.error(error);
      //     }
      // };
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/product/get-all");
          const data = await response.json();
          const filteredData = data.filter(product => product.price < 300000);
          setDiscountList(filteredData);
          console.log(discountList);
          console.log(filteredData);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
  }, []);

  return (
    <>
      <section className='Discount background NewArrivals'>
        <div className='container'>
          <div className='heading d_flex'>
            <div className='heading-left row  f_flex'>
              <img src='https://img.icons8.com/windows/32/fa314a/gift.png' />
              <h2>Big Discounts</h2>
            </div>
           
          </div>
          <Dcard discountList={discountList}/>
        </div>
      </section>
    </>
  )
}

export default Discount
