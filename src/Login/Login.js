import './Login.css'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Signup from '../Signup/Signup'
export default function Login({ setUser, setIsAuthenticated }) {    
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userWelcome, setUserWelcome] = useState('')

    const [error, setError] = useState([])
    

    // const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        // console.log(user)

        // http://localhost:3000/login

        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        // .then(res => {
        //     if(res.ok) {
        //         res.json()
        //         .then(json => {
        //             setUser(json.username)
        //             setIsAuthenticated(true)
        //         })
        //     } else {
            //         res.json()
            //         .then(json => setError(json.error))
            //     }
            // })
            
            .then(res=> res.json())
            .then(json => {
                console.log(json)
                if(json.error) setError(json.error)
                setUserWelcome(json.message)
            })
        // console.log(user.message)
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
            {userWelcome}
                </div>
            </form>
            {/* <Signup setUser={setUser} setIsAuthenticated={setUser}/> */}
            <div>

            </div>

        </>
    );
}