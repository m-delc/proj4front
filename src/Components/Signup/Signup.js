import { React, useState, } from 'react'
import './Signup.css'
import Login from '../Login/Login'

export default function Signup({ setUser, setIsAuthenticated }) {

    // Ix's AUTH
    // Ix's AUTH
    // Ix's AUTH
    // Ix's AUTH
    // Ix's AUTH

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])
    const [message201, setMessage201] = useState('')
    
    function onSubmit(e){
        e.preventDefault()
        setErrors([])
        const user = {
            name: name,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        }
        // http://localhost:3000/users
        fetch('/users', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(user => {
                    setUser(user)
                    setIsAuthenticated(true)
                    setMessage201(user.message)
                })
            } else {
                res.json()
                .then(json => setErrors(Object.entries(json.error))
                )}
        })
        // need something like a ternary which says that
        // if errors, stay on current page and render errors
        // else, navigate
        // if(errors){
        //     return
        // } else
        // navigate('/about')
    }

    return (
        <>
            <form onSubmit={onSubmit} className="form">
                {/* <div className="container1"> */}
                    {message201 ? <h3 className="login-h3">{message201}</h3> : <h3 className="login-h3">Sign up</h3> }
                    <input
                        type="text"
                        id="name"
                        placeholder="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    <input 
                        type="text"
                        id="username"
                        placeholder="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password"
                        placeholder="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password_confirmation"
                        placeholder="confirm password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    <button 
                        type="submit">Sign upppp
                    </button>
                {/* </div> */}
            </form>
            { errors ? errors.map(e => <div key={e}>{e[0]+' : ' + e[1]}</div>) : null}
            {/* { message201 ? message201 : null } */}
        </>
    )
}
