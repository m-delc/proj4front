import './Login.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Login() {    
    
    const [username, setUsername] = useState('')
    // // const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errors, setErrors] = useState([])

    // // const navigate = useNavigate()

    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     const user = {
    //         name: username,
    //         email,
    //         password
    //     }

    //     fetch('http://localhost:3000/users', {
    //         method: 'POST',
    //         headers: 'Content-Type: application/json',
    //         body: JSON.stringify(user)
    //     })
    //     .then(r => r.json())
    //     .then(json => {
    //         if(json.errors) setErrors(Object.entries(json.errors))
    //     })
    // }

    return (
            <form /* onSubmit={onSubmit} */ className="form">
                <div className="container1">
                    <h3 className="login-h3">Sign da fuq in</h3>
                    <input 
                        type="text"
                        // value={username}
                        placeholder="Username" 
                        name="uname" 
                        required />
                    <input 
                        type="password"
                        // value={password}
                        placeholder="Password" 
                        name="pwd" 
                        required />
                    <div className="container2">
                        <button className="button1" type="submit">Login</button>
                        <button className="button3" type="submit">Forgot</button>
                    </div>
                </div>
            </form>
    );
}