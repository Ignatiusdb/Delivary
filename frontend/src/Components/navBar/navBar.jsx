import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'
import './navBar.css'
import { useState } from 'react'
import { StoreContext } from '../../Context/storeContext'

const NavBar = ({ setShowLogin }) => {
    const [menu,setMenu]=useState('home')

    const [getTotalCartAmount]=useContext(StoreContext)

    return (
      <div  className='navbar'>
        <img src={assets.logo} alt='' className='logo'/>
        <ul className='navbar-menu'>
        <Link to='/' onClick={()=>setMenu('home')} className={menu==="home"?'active':''}>Home</Link>
        <a href='#explore-menu'  onClick={()=>setMenu('menu')} className={menu==="menu"?'active':''}>Menu</a>
        <a href='#app-download'  onClick={()=>setMenu('mobile-app')} className={menu==="mobile-app"?'active':''}>Mobile App</a>
        <a href='#]footer'  onClick={()=>setMenu('contact-us')} className={menu==="contact-us"?'active':''}>Contact us</a>
        </ul>
        <div className='navbar-right'>
        <img src={assets.search_icon} alt=''/>
        <div className='navbar-search-icon'>
        <Link to ='/cart'><img src={assets.basket_icon} alt=''/></Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={(setShowLogin(true))}>Sign In</button>
        </div>
  
      </div>
    )
}

export default NavBar
