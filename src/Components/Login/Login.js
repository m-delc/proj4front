import './Login.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
// import Signup from '../Signup/Signup'
// import About from '../About/About'
// import Navbar from "../Navbar/Navbar"







export default function Login({ setUser, setIsAuthenticated, setUserWelcome }) {    
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [userWelcome, setUserWelcome] = useState('')

    const [error, setError] = useState([])
    const navigate = useNavigate()
    
    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                    setUser(user)
                    setIsAuthenticated(true)
                    // setUserWelcome(user.message)
                    // console.log(user.message)
                    navigate('/about')
                })
            } else {
                    res.json()
                    .then(json => setError(json.error))
                }
            })
        }

    return (
        <>
        <form onSubmit={onSubmit} className="form">
            <div className="container1">
                <h3 className="login-h3">Login</h3>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" 
                    name="uname" 
                    />
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                    name="pwd" 
                    />
                <div className="container2">
                    <button className="button1" type="submit">Login</button>
                </div>
            </div>
            <div className="container3">
                {error ? <div>{error}</div> : null}
            </div>
        </form>
        </>
    );
}