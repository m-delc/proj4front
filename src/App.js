import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'
import { React, useEffect, useState } from 'react'
import Index from './IndexAll/IndexAll'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)


  console.log(user)
  console.log(isAuthenticated)

  useEffect(() => {
    fetch('/authorized_user')
    .then(r => {
        if (r.ok) {
            r.json()
            .then(user => {
                setIsAuthenticated(true)
                setUser(user)
            })
        }
    })
})

  if(!isAuthenticated) return <Login error={"Please Login"} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

  return (


    <div className="container">
      <Navbar />
      <Index />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </div>

  );
}

export default App;