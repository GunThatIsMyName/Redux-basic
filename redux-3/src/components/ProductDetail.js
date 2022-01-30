import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';

function ProductDetail() {
  const {id:productId} = useParams();
  const dispatch = useDispatch();

  // get Data
  const {product} = useSelector(state=>state.singleProduct);
  console.log(product,"single");


  // Fetch single Data 
  const getSingleData=async()=>{
    const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    console.log(data,"data sending")
    dispatch(selectedProduct(data));
  }

  useEffect(()=>{
    if(productId && productId !== "")getSingleData();
    return ()=>{
      dispatch(removeSelectedProduct());
    }
  },[productId])

  if(Object.keys(product).length === 0){
    return <h1>LOADING ... </h1>
  }

  const {category,image,price,title}=product;

  return <div>
    <h1>{title}</h1>
    <img src={image} alt={title} />
    <span>{category}</span>
    <p>{price}</p>
  </div>;
}

export default ProductDetail;
