import React, { useContext } from 'react'
import { ThemeContext } from '../App'



const PageNotFound = () => {
  const { name }= useContext(ThemeContext)

  return (
    <div>PageNotFound {name} </div>
  )
}

export default PageNotFound