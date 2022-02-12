import { React, useState } from 'react'
import './Navbar.css'

export default function Navbar() {

  // how to set active link in navbar?
  // how to set active link in navbar?
  // how to set active link in navbar?
  
  const [activeLink, setActiveLink] = useState()

  return (
    <header>
      <div className="topnav">
        <a href="/home">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/about">About</a>
      </div>
    </header>
  )
}
