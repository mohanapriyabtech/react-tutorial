import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/reducer/counterSlice';
import RegistrationForm from './components/signup';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();

  // function handleDecrement() {
  //   if(count > 0) {
  //     dispatch(decrement())
  //   }
   
  return (
    
      <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
      </Routes>
    </Router>

    // sample tags

    // <div className="App">
    //   <h1>welcome</h1>
    //   <div>count:{count}</div>
    //   <button onClick = {()=>dispatch(increment())}>+</button>
    //   <button onClick={handleDecrement}>-</button>
    // </div>
  );
}

export default App;
