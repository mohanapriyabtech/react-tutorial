import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductItem = ({ product, onAddToCart }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAddedToCart(true);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {isAddedToCart ? (
        <p>Product added to cart</p>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductItem;
