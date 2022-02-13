import '../App.css';
import { React, useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Navbar from "./Navbar/Navbar"
import Home from './Home/Home'
import About from './About/About'

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [logoutMessage, setLogoutMessage] = useState("")
  const [userWelcome, setUserWelcome] = useState('')
  // setUserWelcome={setUserWelcome}


  
  console.log(isAuthenticated)
  console.log(user)
  // console.log(userWelcome)
  
  
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

    // const auth = () =>{
    //   if (user) return setIsAuthenticated(true)
    // }
    // auth={auth}
    
    
    // if (!user.message) return console.log(user.message)

if (!isAuthenticated) return <Login error={"Please Login"} setUser={setUser} setIsAuthenticated={setIsAuthenticated}  />

return (

    <div className="container">
      <Navbar setUser={setUser} setIsAuthenticated={setIsAuthenticated} setUserWelcome={setUserWelcome} setLogoutMessage={setLogoutMessage} />
      {/* <About userWelcome={userWelcome} /> */}
      <Routes>
        <Route path="/signup" element={<Signup setUser={setUser} setIsAuthenticated={setUser} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About userWelcome={userWelcome} />} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>

  );
}

export default App;