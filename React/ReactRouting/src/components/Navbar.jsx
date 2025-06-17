import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div className='container '>
        <ul>
            <li>
                <NavLink to='/' className = {({isActive}) => isActive ? "active-link"  : ""   }>
                Home
            </NavLink>
            </li>

            <li> <NavLink to='/dashboard' className = {({isActive}) => isActive ? "active-link"  : ""}>DashBoard</NavLink></li>
            <li><NavLink to='/about' className = {({isActive}) => isActive ? "active-link"  : ""}> About</NavLink></li>
            <li><NavLink to='/login' className = {({isActive}) => isActive ? "active-link"  : ""}>Login</NavLink></li>
        </ul>
    </div>
  )
}   

export default Navbar