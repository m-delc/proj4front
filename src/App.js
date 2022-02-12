import './App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'
// import Index from './IndexAll/IndexAll'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)


  // console.log(user)
  // console.log(isAuthenticated)

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
        if (res.ok) {
            res.json()
            .then(user => {
                setIsAuthenticated(true)
                setUser(user)
            })
        }
    })
}, [])

if(!isAuthenticated) return <Login error={"Please Login"} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />

return (


    <div className="container">
      <Navbar />
      {/* <Index /> */}
      <Routes>
        <Route path="/signup" element={<Signup setUser={setUser} setIsAuthenticated={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<App />} /> */}
      </Routes>
    </div>

  );
}

export default App;