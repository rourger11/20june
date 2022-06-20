import React from 'react'
import './Navbar.css'
import  cart from '../images/car.png'
import {NavLink,Link} from 'react-router-dom'


export default function Navigation(prop){
  return (

      <>
  
  <ul className='navbar'>

  <li> <p>This is your store </p></li>

  <li> <NavLink to='/Home'>Home </NavLink> </li>
  <div className='d_flex'>

  <Link to='/Cart'><img src={cart} alt='abc' className='cart'/></Link>
  <div>

 
  <p id='item'>{prop.items}</p>
  </div>
  </div>

</ul>

</>
  )
}
