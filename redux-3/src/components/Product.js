import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product() {
  const { products } = useSelector((state) => state.allProducts);

  const renderList = products.map((product) => {
    const { image, title, id, price, category } = product;
    return (
      <Link to={`/product/${id}`} key={id} className="">
      <div>
        <img width="200" height="200" src={image} alt={title} />
        <div>
          <div>{title.substr(0, 10)}</div>
          <div>${price}</div>
          <div>{category}</div>
        </div>
      </div>
    </Link>
    );
  });

  return <>{renderList}</>;
}

export default Product;