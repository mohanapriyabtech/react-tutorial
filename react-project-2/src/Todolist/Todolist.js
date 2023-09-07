import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './Todolist.css';

function day() {
  const a = ["Morning", "afternoon", "evening"];
  const int = Math.floor(Math.random() * 3);
  const c = a[int];
  return c;
}

function Todolist() {
  // Manage the state for items within the Sample component
  const [items, setItems] = useState([]);

  const handleCheck = (id) => {
    // Handle checking within the Sample component
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  const handleDelete = (id) => {
    // Handle deletion within the Sample component
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };

  const addItem = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem("todo_list", JSON.stringify(updatedItems));
  };
  
  
  const handleAddTask = () => {
    // You can call addItem here to add a new task
    const newTask = {
      id: items.length + 1, // Generate a unique ID for the new item
      checked: false,
      item: "New task"
    };
    addItem(newTask);
  };

  return (
    <main>
      {items.length ? (
        <>
          <ul>
            {items.map((item) => (
              <li className='item' key={item.id}>
                <input
                  type="checkbox"
                  onChange={() => handleCheck(item.id)}
                  checked={item.checked}
                />
                <label>{item.item}</label>
                <FaTrashAlt
                  role="button"
                  onClick={() => handleDelete(item.id)}
                  tabIndex="0"
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p style={{ marginTop: '2rem', color: 'red' }}>This is empty</p>
      )}
       <button onClick={handleAddTask}>Add Task</button>
    </main>
  );
}


export default Todolist;
