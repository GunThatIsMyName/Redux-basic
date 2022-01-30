import React from "react";
import { useSelector } from "react-redux";

function Product() {
  const { products } = useSelector((state) => state.allProducts);

  const renderList = products.map((product) => {
    const { image, title, id, price, category } = product;
    return (
      <div key={id} className="">
      <div>
        <img width="200" height="200" src={image} alt={title} />
        <div>
          <div>{title.substr(0, 10)}</div>
          <div>${price}</div>
          <div>{category}</div>
        </div>
      </div>
    </div>
    );
  });

  return <>{renderList}</>;
}

export default Product;