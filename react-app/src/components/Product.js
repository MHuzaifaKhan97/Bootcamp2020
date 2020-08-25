import React from 'react';
import shoes from './../shoes.json';
import {Link} from 'react-router-dom';

function Product() {
  console.log(shoes);
  return (
    <div className="main">
      <h1>Welcome to Product</h1>
      <div className="product-container">
        {Object.keys(shoes).map((keyName,index) => {
          const shoe = shoes[keyName];
          return (<Link 
          to={`./product/${keyName}`} 
          key={index} 
          className="product">
              <h3>{shoe.name.replace(/-/g,' ').toUpperCase()}</h3>
              <img src={shoe.img} height={150} />
          </Link>)
        })}
      </div>
    </div>
  );
}

export default Product;
