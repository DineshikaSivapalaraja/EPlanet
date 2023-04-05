import React from 'react';
import "../styles/style.css";

function Product() {
  return (
    <section className="add-products">
      <h1 className="heading">add product</h1>
      <form action="" method="post" encType="multipart/form-data">
        <div className="flex">
          <div className="inputBox">
            <span>product name (required)</span>
            <input type="text" className="box" required maxLength="100" placeholder="enter product name" name="name" />
          </div>
          <div className="inputBox">
            <span>product price (required)</span>
            <input type="number" min="0" className="box" required max="9999999999" placeholder="enter product price" onKeyPress={(e) => { if(e.target.value.length === 10) e.preventDefault(); }} name="price" />
          </div>
          <div className="inputBox">
            <span>image 01 (required)</span>
            <input type="file" name="image_01" accept="image/jpg, image/jpeg, image/png, image/webp" className="box" required />
          </div>
          <div className="inputBox">
            <span>image 02 (required)</span>
            <input type="file" name="image_02" accept="image/jpg, image/jpeg, image/png, image/webp" className="box" required />
          </div>
          <div className="inputBox">
            <span>image 03 (required)</span>
            <input type="file" name="image_03" accept="image/jpg, image/jpeg, image/png, image/webp" className="box" required />
          </div>
          <div className="inputBox">
            <span>product details (required)</span>
            <textarea name="details" placeholder="enter product details" className="box" required maxLength="500" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className="inputBox" style={{ marginTop: "15px", marginBottom: "15px" }}>
          <label htmlFor="category"><span>Choose a Product Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></label>
          <select name="product-category" id="category">
            <option value="smartphone">SmartPhone</option>
            <option value="lap">Laptop</option>
            <option value="watch">Watch</option>
            <option value="tv">TV</option>
            <option value="camera">Camera</option>
          </select>
        </div>
        <input type="submit" value="add product" className="btn" name="add_product" />
      </form>
    </section>
  );
}

export default Product;
