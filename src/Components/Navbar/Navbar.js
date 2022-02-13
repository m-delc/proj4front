import { useNavigate, Link } from "react-router-dom";
import { React, useState } from 'react'
import './Navbar.css'

export default function Navbar({ setIsAuthenticated, user, setUser, setLogoutMessage }) {

  // how to set active link in navbar?
  // how to set active link in navbar?
  // how to set active link in navbar?
  
  const [activeLink, setActiveLink] = useState()
  const navigate = useNavigate()

  

  const logout = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    .then(() =>{
      setIsAuthenticated(false);
      setUser(null)
      setLogoutMessage("You are logged out")
      navigate('./')
    })
  }

  return (
    <header>
      <div className="topnav">
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to="/" onClick={logout}>Logout</Link>
        <Link to='/profile'>{user? user.username : null}'s Settings</Link>
        {/* <Link to='/profile'>{user.username}'s Settings</Link> */}
        {/* <div className="user">
          {user? user.username : null}
        </div> */}
        {/* <a href="/">Home</a>
        <a href="/signup">Signup</a>
        <a href="/about">About</a> */}
        {/* <a href="/login">Login</a> */}
        {/* <a href="/logout">Logout</a> */}
      </div>
    </header>
  )
}
