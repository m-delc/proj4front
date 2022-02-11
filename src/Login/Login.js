import './Login.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Login() {    
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState([])
    

    // const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        // console.log(user)

        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(r => r.json())
        .then(json => {
            // console.log(json)
            if(json.error) setError(json.error)
        })
    }

    return (
        <>
            <form onSubmit={onSubmit} className="form">
                <div className="container1">
                    <h3 className="login-h3">Sign da fuq in</h3>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username" 
                        name="uname" 
                        required />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" 
                        name="pwd" 
                        required />
                    <div className="container2">
                    
                        <button className="button1" type="submit">Login</button>
                        {/* <button className="button3" type="submit">Forgot</button> */}
                    </div>
                </div>
                <div className="container3">

            {error ? <div>{error}</div> : null}
                </div>
            </form>
        </>
    );
}