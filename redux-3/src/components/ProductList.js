import React, { useEffect } from 'react';
import Product from './Product';
import axios from "axios";


function ProductList() {


  const getFetchData=async()=>{
    const {data} = await axios("https://fakestoreapi.com/products");
    console.log(data,"?")
  }

  useEffect(()=>{
    getFetchData();
  },[])

  return (
    <div className="ui grid container">
      <h1>product list</h1>
      <Product />
    </div>
  );
}

export default ProductList;