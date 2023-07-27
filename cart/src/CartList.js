import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartList.css';

const CartList = () => {
  const location = useLocation();
  const cart = location.state || [];
  const navigate = useNavigate();
  const [itemCount, setItemCount] = useState({});
  const [totalValue, setTotalValue] = useState(0);


  const handleIncrement = (itemId) => {
    setItemCount((prevCount) => ({
      ...prevCount,
      [itemId]: (prevCount[itemId] || 0) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setItemCount((prevCount) => ({
      ...prevCount,
      [itemId]: Math.max((prevCount[itemId] || 0) - 1, 0),
    }));
  };

  // Calculate total value for each item
  const calculateTotal = (item) => {
    const count = itemCount[item.id] || 0;
    const price = count * parseFloat(item.price.replace('$', ''));
    return price;
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += calculateTotal(item);
    });
    setTotalValue(total);
  }, [itemCount, cart]);

  const handleSubmitCart = () => {
    const cartItems = cart.map((item) => ({
      ...item,
      count: itemCount[item.id] || 0,
    }));

    if (cartItems.length > 0 && totalValue > 0) {
      console.log('Cart submitted:', cartItems);
      toast.success('Cart submitted successfully!');
      navigate('/success')
    } else {
      console.log("no value")
      toast.error('Your cart is empty. Please add items before submitting.');
    }
  };

  return (
    <div className="cart-list-container">
      <h2 className="cart-heading">Cart Items</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="item-details">
              <h3 className="item-name">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <div className="item-controls">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span className="item-count">{itemCount[item.id] || 0}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <p className="item-total">Total: ${calculateTotal(item).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price-container">
        <label className="price-label">Total Price</label>
        <p className="total-price">{totalValue.toFixed(2)}</p>
      </div>
      <button onClick={handleSubmitCart} className="submit-button">
        Order
      </button>
      <ToastContainer />
    </div>
  );
};

export default CartList;
