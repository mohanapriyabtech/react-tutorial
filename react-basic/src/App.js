import React from 'react'
function day(){

  const a = ["today","tomorrow"]
  const int = Math.floor(Math.random()*3)
  return int(a)
}


const App = () => {

  return (
    <div>{day()}</div>
  )
}

export default App