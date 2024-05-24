import React from 'react'
import './sideBar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
    <div className='sidebar-options'>
    <NavLink to="/add" className='sidebar-option'>
    <img src={assets.add_icon} alt='' />
    <p>ADD ITEMS</p>
    
    </NavLink>
    <NavLink to='/list' className='sidebar-option'>
    <img src={assets.order_icon} alt='' />
    <p>list ITEMS</p>
    
    </NavLink>
    <NavLink to='/orders' className='sidebar-option'>
    <img src={assets.order_icon} alt='' />
    <p>ordes ITEMS</p>
    
    </NavLink>
    
    </div>
      
    </div>
  )
}

export default SideBar
