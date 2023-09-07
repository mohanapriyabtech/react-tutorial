import logo from './logo.svg';
import './App.css';
import Todolist from "./Todolist/Todolist"
import Task from "./Task/Task"
import FetchApi from './api-fetch/FetchApi';

function App() {
  return (
    <div className="App">
      <p> Todolist</p>
     {/* <Todolist /> */}
     {/* <Task /> */}
     <FetchApi />
    </div>
  );
}

export default App;
