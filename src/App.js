import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./login/login"
import Signup from "./signup/signup"
import Navbar from "./navbar/navbar"
import Home from './home/home'
import About from './about/about'
import { React, useEffect, useState } from 'react'
import Index from './index/index'

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