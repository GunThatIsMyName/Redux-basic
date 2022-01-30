import React, { useEffect } from 'react';
import Product from './Product';
import axios from "axios";
import { setProducts } from '../redux/actions/productActions';
import { useDispatch } from 'react-redux';


function ProductList() {

  // Higher order function 보다 간편히 가져 오는 방법
const dispatch = useDispatch();

  const getFetchData=async()=>{
    const {data} = await axios("https://fakestoreapi.com/products").catch(err=>console.log(err,"ERROR"));
    dispatch(setProducts(data));
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