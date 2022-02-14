import './Login.css'
import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react'
// import Signup from '../Signup/Signup'
// import About from '../About/About'
// import Navbar from "../Navbar/Navbar"


export default function Login({ setUser, setIsAuthenticated, setUserWelcome }) {    
    
    // the following is from original /login
    // the following is from original /login
    // the following is from original /login
    // const [userWelcome, setUserWelcome] = useState('')
    const [loginUsername, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [loginError, setLoginError] = useState([])

    const navigate = useNavigate()

    // added from /signup
    // added from /signup
    // added from /signup
    // added from /signup
    const [name, setName] = useState("");
    const [signupErrors, setSignupErrors] = useState([])
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // for signup, but added here
    // for signup, but added here
    // for signup, but added here
    const [signupUsername, setSignupUsername] = useState('')
    const [signupPassword, setSignupPassword] = useState('')

    // login submit
    // login submit
    // login submit
    const loginOnSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: loginUsername,
            password: loginPassword
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
                    console.log(user)
                    setIsAuthenticated(true)
                    // setUserWelcome(user.message)
                    // console.log(user.message)
                    navigate('/about')
                })
            } else {
                    res.json()
                    .then(json => setLoginError(json.error))
                }
            })
        }

    // signup submit
    // signup submit
    // signup submit
    function signupOnSubmit(e){
        e.preventDefault()
        // setSignupErrors([])
        const user = {
            name: name,
            username: signupUsername,
            password: signupPassword,
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
                    console.log(user.username)
                    setIsAuthenticated(true)
                    // setMessage201(user.message)
                })
            } else {
                res.json()
                .then(json => setSignupErrors(Object.entries(json.error))
                )}
        })
    }



    return (
        <>
        <div className="main-horizontal-container" >
            {/* login form */}
            {/* login form */}
            {/* login form */}
            

            <form onSubmit={loginOnSubmit} className="form">
                <div className="container1">
                    <div className="container4">
                        <p></p>
                    <h3 className="login-h3">Login</h3>

                    </div>
                    <input 
                        type="text"
                        value={loginUsername}
                        onChange={(e) => setLoginUsername(e.target.value)}
                        placeholder="Username" 
                        name="uname" 
                        />
                    <input 
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="Password" 
                        name="pwd" 
                        />
                    <div className="container2">
                        <button className="button1" type="submit">Login</button>
                    </div>
                </div>
                <div className="container3">
                    {loginError ? <div>{loginError}</div> : null}
                </div>
            </form>
            
            
            {/* signup form */}
            {/* signup form */}
            {/* signup form */}
            <form onSubmit={signupOnSubmit} className="form">
                <div className="container1">
                <Link to='/signup'><h3 className="login-h3">Signup</h3></Link>

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
                        value={signupUsername}
                        onChange={(e) => setSignupUsername(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password"
                        placeholder="password" 
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                        />
                    <input 
                        type="password"
                        id="password_confirmation"
                        placeholder="confirm password" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    <button 
                        type="submit">Sign up
                    </button>
                </div>
            </form>
            
            { signupErrors ? signupErrors.map(e => <div key={e}>{e[0]+' : ' + e[1]}</div>) : null}
        </div>
        </>
    );
}