import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router-dom';

const EndPage = () => {

    const location = useLocation();
    const data = location.state.data;
    console.log(data)
  
    // const navigate = useNavigate();
    //     const handleFinalCart = () => {
    //     //   toast.success(`${cart.name} added to cart`);
    //       navigate('/end')
      
    // };  
    
    
  return (
      <div className="order">
      {/* <img src={cart.image} alt={cart.name} />
      <h3>{cart.name}</h3>
      <p>{cart.price}</p> */}
      {/* <button onClick={handleFinalCart}>SubmitCart</button> */}
      <p>Your cart items have been successfully added.</p>
    </div>
  );
};

export default EndPage;
