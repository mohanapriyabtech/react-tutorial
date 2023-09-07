import React from 'react'

function List({data}) {

  console.log(data,"data")

  return (
    <div>
      <ul>
      {data.map((value,index) =>(

        <li key={index}>{value}</li>
      ))}
      </ul>
    </div>
  )
}

export default List