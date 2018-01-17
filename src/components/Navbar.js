import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <div className="navbar">
    <div className='navlist'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><a href="https://supamoto.myshopify.com/">Store</a></li>
    </ul>
  </div>
  </div>
)

export default Navbar
