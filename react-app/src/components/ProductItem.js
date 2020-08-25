import React from 'react';
import { useParams } from 'react-router-dom';
import shoes from './../shoes.json';


function ProductItem() {
  let { id } = useParams();
  const shoe = shoes[id];
  console.log(shoe);
  if (!shoe) {
    return <h1>Product Not Found</h1>
  }
  return (
      <div>
        <h1>Welcome to Product Item</h1>
        <div
          className="productItem">
          <h3>{shoe.name.replace(/-/g, ' ').toUpperCase()}</h3>
          <img src={shoe.img} height={150} />
        </div>
      </div>
  );
}

export default ProductItem;
