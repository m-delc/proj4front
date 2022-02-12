import { React, 
    useState,
    useEffect } from 'react'
import './Signup.css'
import { useNavigate } from "react-router-dom";
import Login from '../Login/Login'

export default function Signup({ setUser, setIsAuthenticated }) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])


    function onSubmit(e){
        e.preventDefault()
        setErrors([])
        const user = {
            name: name,
            username: username,
            password: password,
            password_confirmation: passwordConfirmation
        }
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
                })
            } else {
                res.json()
                .then(json => setErrors(json.errors))
            }
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
                    <h3 className="login-h3">Sign ur ass uPPP</h3>
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
                        
                        type="submit">Sign up!
                    </button>
                {/* </div> */}
            </form>
            { errors ? errors.map(e => <div>{e[0]+' : ' + e[1]}</div>) : null}
        </>
    )
}
