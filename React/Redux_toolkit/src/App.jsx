
import './App.css'
import {useSelector , useDispatch} from 'react-redux'
import { increment , decrement , reset } from './features/counterSlices'
import { useState } from 'react'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0);


  function  handleIncrementClick(){
    dispatch(increment());
  }

  function  handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick (){
    dispatch(reset())
  }
  function handleAddAmountClick(){
    dispatch(incrementByAmount(amount))
  }
  return (

   <div  style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <button onClick={handleIncrementClick}>+</button>
      <br/>
      Count : {count}
      <br/><br/>
      <button onClick={handleDecrementClick}>-</button>
      <br/><br/>
      <button onClick={handleResetClick}>Reset</button>
      <br/><br/>

      <input type="Number"
      name = "amount"
      value={e.target.value}
      placeholder='Enter Amount'
       /><br/><br/>

      <button onClick={()handleAddAmountClick}>Add Amount</button>

   </div>
  )
}

export default App
