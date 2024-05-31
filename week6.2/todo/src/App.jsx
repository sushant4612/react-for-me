import axios from 'axios'
import { useState, useEffect } from 'react'
function App() {
  const [sum, setSum] = useState(0);
  const [count, setCount] = useState(0);

  let num = 0;
  for(let i = 1; i <= sum; i++){
    num += i;
  }
  return (
    <>
    <div>
      <input type="text" onChange={(e) => setSum(e.target.value)} />
      <p>Sum is {num}</p>
      <button onClick={() => setCount(count+1)}>Counter ({count})</button>
    </div>
    </>
  )
}

export default App
