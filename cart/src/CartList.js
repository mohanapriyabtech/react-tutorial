import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const CartList = ({ cart }) => {

//     console.log(cart,"cart")
  
//   const navigate = useNavigate();
//   const handleFinalCart = () => {
//     toast.success(`${cart.name} added to cart`);
//     navigate('/end')

 // };

  return (
    <div className="cart-list">
      {/* <img src={cart.image} alt={cart.name} />
      <h3>{cart.name}</h3>
      <p>{cart.price}</p>
      <button onClick={handleFinalCart}>SubmitCart</button> */}
    </div>
  );
};

export default CartList;
