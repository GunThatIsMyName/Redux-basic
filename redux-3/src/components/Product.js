import React from 'react';
import {useSelector} from 'react-redux';

function Product() {
  const products = useSelector((state) => state);
  console.log(products, 'products');
  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <div className="content">
              <div className="header"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;