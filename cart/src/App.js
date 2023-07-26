import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import RegistrationForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProductList from './ProductList';
import CartList from './CartList';
import EndPage from './End';


const App = () => {

  const products = [
    {
      id: 1,
      name: 'item 1',
      price: '$19.99',
      image: 'https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_640.jpg',
    },
    {
      id: 2,
      name: 'item 2',
      price: '$29.99',
      image: 'https://media.istockphoto.com/id/1405931043/photo/scoop-the-vanilla-ice-cream-with-an-ice-cream-scoop.jpg?s=1024x1024&w=is&k=20&c=VeqFEc0WqbM3eluH4bXrcnQGCqkMF09gTWTE0ibIyDM=',
    },
    {
      id: 3,
      name: 'item 3',
      price: '$29.99',
      image: 'https://thumbs.dreamstime.com/b/neapolitan-ice-cream-15779155.jpg',
    },
    {
      id: 4,
      name: 'item 4',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_640.jpg',
    },
    {
      id: 5,
      name: 'item 5',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2016/10/03/23/15/ice-1713160_640.jpg',
    },
    {
      id: 6,
      name: 'item 6',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2016/04/25/07/03/weapon-1351308_640.jpg',
    },
    {
      id: 19,
      name: 'item 7',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/ice-cream-1932465_640.jpg',
    },
    {
      id: 7,
      name: 'item 8',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2015/09/05/23/54/ice-cream-926426_640.jpg',
    },
    {
      id: 8,
      name: 'item 9',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2015/05/17/13/12/ice-cream-770994_640.jpg',
    },
    {
      id: 9,
      name: 'item 10',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_640.jpg',
    },
    {
      id: 10,
      name: 'item 11',
      price: '$29.99',
      image: 'https://media.istockphoto.com/id/1405931043/photo/scoop-the-vanilla-ice-cream-with-an-ice-cream-scoop.jpg?s=1024x1024&w=is&k=20&c=VeqFEc0WqbM3eluH4bXrcnQGCqkMF09gTWTE0ibIyDM=',
    },
    {
      id: 11,
      name: 'item 12',
      price: '$29.99',
      image: 'https://cdn.pixabay.com/photo/2019/11/23/20/04/coffee-4648041_640.jpg',
    },




  ];
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [isRegistered, setIsRegistered] = useState(false);

  

  // Function to add a new user to the registeredUsers array
  const registerUser = (user) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, user]);
    setIsRegistered(true); // Set isRegistered to true to conditionally render the login form
  };

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm registerUser={registerUser} />} />
        <Route path="/login" element={<LoginForm registeredUsers={registeredUsers} />} />
        <Route path="/product" element={<ProductList products={products} />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </Router>
  );
};

export default App;
