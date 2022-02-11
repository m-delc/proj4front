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

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch('/me').then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user))
  //     }
  //   })
  // }, [])


  return (


    <div className="container">
      <Navbar />
      <Index />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>

    </div>

  );
}

export default App;