import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductItem = ({ product }) => {
//   const [count, setCount] = useState(0);
const [isAddedToCart, setIsAddedToCart] = useState(false);
 

  const handleAddToCart = () => {
    // setCount((prevCount) => prevCount + 1);
    setIsAddedToCart(true)
    toast.success(`${product.name} Added to cart`);
  
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {!isAddedToCart ? (
        <button onClick={handleAddToCart}>Add to Cart</button>
      ) : (
        <p>Added to Cart</p>)}
    </div>
  );
};

export default ProductItem;
