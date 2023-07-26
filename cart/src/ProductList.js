import React, { useState ,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import './ProductList.css';
import CartList from './CartList';
import './Submit.css'

const ProductList = ({ products }) => {
  const [cart, setCart] = useState([])
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    // navigate('/cart-list');
  };

  const handleSubmitCart = () => {
  
    if (products.length > 0) {
      console.log('Cart submitted:', cart);
      toast.success('Cart submitted successfully!');
     
      navigate('/end', { state: cart });
    } else {
      toast.error('Your cart is empty. Please add items before submitting.');
    }

   
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart}/>
      ))}
      <ToastContainer />
      {/* Submit button */}
      <div className="submit-button-container">
      {products.length > 0 && (
        <button onClick={handleSubmitCart} className="submit-button">
          Submit Cart
        </button>
      )}
      </div>
      
    </div>
  );
};

export default ProductList;
