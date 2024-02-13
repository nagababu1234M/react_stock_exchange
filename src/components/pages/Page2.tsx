import React from 'react';
import { useState } from 'react';
import {TableData } from '../common/TableData.ts';
const postUrl="https://dummyjson.com/products/add";
const Page2 = () => {
  const [formData,setValue]= useState({
    productName: '',
    productPrice: '',
    productDescription: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...formData,
      [name]: value,
    });
  };
  const submitForm = async (e)=>{
    e.preventDefault();
    try{
      await TableData(postUrl, "POST",formData);
      setValue({
        productName: '',
        productPrice: '',
        productDescription: '',
      });
    }catch{
      console.log('error');
    }
  }
  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          name="productName"
          value={formData.productName}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="productPrice">Product Price</label>
        <input
          name="productPrice"
          value={formData.productPrice}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
  
      <div className="form-group">
        <label htmlFor="productDescription">Product Description</label>
        <input
          name="productDescription"
          value={formData.productDescription}
          type="text"
          className="form-control"
          onChange={handleChange}
        />
      </div>
  
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default Page2;