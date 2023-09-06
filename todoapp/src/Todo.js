import {useState , useR} from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Todo() {

    const [data , setData] = useState([])
    const addData = () => {

    }

  return (
    <div>
        <header>Todo List</header>
        <input></input>
        <button onClick = {addData()}>Add Todo</button>
        <button>Delete</button>
        <FaHeart />


    </div>
  )
}

export default Todo