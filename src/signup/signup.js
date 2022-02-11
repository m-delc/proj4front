import { React, useState } from 'react'
import './signup.css'
import { useNavigate } from "react-router-dom";

export default function Signup({ onLogin }) {

    const navigate = useNavigate()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:3000/users', {
            mode: "no-cors",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                passwordConfirmation,
            }),
        })
        .then(r => r.json())
        .then(console.log("hey"))
    }


    return (
        // <div>
            <form onSubmit={handleSubmit} className="form">
                {/* <div className="container1"> */}
                    <h3 className="login-h3">Sign ur ass uPPP</h3>
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
                    <button onSubmit={e => navigate('/home')} type="submit">Submit</button>
                {/* </div> */}
            </form>
        // </div>
    )
}
