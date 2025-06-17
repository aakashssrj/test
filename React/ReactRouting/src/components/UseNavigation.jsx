import React from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigation = () => {
    const navigate = useNavigate()

    // function handleClick(){
        // }
        //     navigate('/about')
  return (
    <div>
        <button onClick ={()=>navigate('/about')}>
            Click to Go in to About Section
        </button>
    </div>
  )
}

export default UseNavigation