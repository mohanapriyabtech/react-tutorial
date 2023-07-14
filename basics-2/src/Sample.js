import React from 'react'

import { FaTrashAlt } from "react-icons/fa";

const Sample = ({items,handleCheck,handleDelete}) => {

  

  return (
    <main>
      {(items.length) ? (
      <>
      <ul>
        {items.map((item) => (
          <li className='item' key = {item.id}>
            <input 
              type = "checkbox"
              onChange={() => handleCheck(item.id)}
              checked = { item.checked}

              />
              <label>{item.item}</label>

              < FaTrashAlt 
                role = "button"
                onClick={() => handleDelete(item.id)}
                tabIndex = "0"
              />
              

          </li>
        ))}
      </ul>
      </>
      ) : (
        <p style = {{ marginTop: '2rem',color:'red'}}>this is empty</p>
      )}

      

    </main>
    
  )
}

export default Sample