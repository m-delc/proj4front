import { React, useState } from 'react'
import './Navbar.css'

export default function Navbar() {

  const [activeLink, setActiveLink] = useState()

  return (
    <header>
      <div className="topnav">
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/about">About</a>
      </div>
    </header>
  )
}
