import { useState } from "react"


function App() {
 
  const [count , setCount] = useState(0)

  const handleClick=()=>{
    setCount(count + 1)
  }

  return (
    <div>
      <div>{count}</div>
      Count :: 
      <button onClick={handleClick} >Increment</button>
    </div>
  
  )
}

export default App
