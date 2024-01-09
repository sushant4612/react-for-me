import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function addition(){
    if(counter == 20){
      setCounter(20)
    }else{
      setCounter(counter+1);
    }
  }

  function remove(){
    if(counter == 0){
      setCounter(0);
    }else{
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h2>Counter {counter}</h2>
      <button onClick={addition}>Add</button>
      <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
