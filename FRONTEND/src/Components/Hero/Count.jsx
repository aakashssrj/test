import React, { useState } from 'react'

const Count = () => {
    const [value, setValue] = useState(5);

    function updateValue() {
      setValue(value + 1);  // Updates value asynchronously
      console.log(value);   // Logs the current value (not updated yet!)
    }
    return(
    <div>
       <button onClick={updateValue} className='bg-blue-500'>Update</button>
    </div>


    )
    
  
}

export default Count
