import React from 'react';
import './App.css';
import San from './San.js';
import Sample from './Sample';
import { useState } from 'react'



function day(){

  const a = ["Morning","afternoon" ,"evening"]
  const int = Math.floor(Math.random()*3)
  return a[int]
  
}


function App() {
  const [items, setItems] = useState(
    [
      { id : 1,
        checked : true,
        item : "practice"
      },
      { id : 2,
        checked : true,
        item : "test"
      },
      { id : 3,
        checked : false,
        item : "read about"
      }

    ]
  )
const handleCheck = (id) => {
  console.log("click" + id)
  const listItems = items.map((item)=>item.id === id ?  { ...item,checked : !item.checked } : item)
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}


const handleDelete = (id) => {
  console.log("click" + id)
  const listItems = items.filter((item)=>item.id !== id )
  setItems(listItems)
  localStorage.setItem("todo_list",JSON.stringify(listItems))
}
  return (
    <>
      <h1>Good {day()}</h1>
      <San items = {items} />
      <Sample 
       items = {items}
       handleCheck = { handleCheck}
       handleDelete = { handleDelete}
      />
    </>
  );
}

export default App;
