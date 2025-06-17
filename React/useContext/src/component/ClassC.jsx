import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ClassC = () => {

  const {theme, setTheme} = useContext(ThemeContext)

  function hanleClick() {
    if(theme === 'Green') {
      setTheme("Red")
    } 
    else {
      setTheme("Green")
    }
  }

  return (
    <div>
      <button onClick={hanleClick}>Click To {theme}</button>
    </div>
  )
}

export default ClassC