import { useState } from "react";
import Home from "./Home";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");               
    const handleSubmit = (e) => {
        if (username === "admin" && password === "1234") {
            <Home />            
        } else {        
            alert("Invalid credentials. Please try again.");
        }   
        e.preventDefault();
    }       

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input

                    type="text"
                    value={username}            
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}   
                />
            </div>
            <button type="submit">Log In</button>
        </form>
    );
}       
export default Login;   