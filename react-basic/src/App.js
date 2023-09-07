import React from 'react'
function day(){

  const a = ["today","tomorrow"]
  const int = Math.floor(Math.random()*2)
  console.log("hello")
  return a[int]
}


const App = () => {

  return (
    <div>
      <p>{day()}</p>
    </div>
  )
}

export default App