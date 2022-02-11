import './login.css'
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate()

    return (
            <form className="form">
                <div className="container1">
                    <h3 className="login-h3">Sign da fuq in</h3>
                    <input type="text" placeholder="Username" name="uname"  required />
                    <input type="password" placeholder="Password" name="pwd" required />
                    <div className="container2">
                        <button className="button1" type="submit">Login</button>
                        <button className="button3" type="submit">Forgot</button>
                    </div>
                </div>
            </form>
    );
}