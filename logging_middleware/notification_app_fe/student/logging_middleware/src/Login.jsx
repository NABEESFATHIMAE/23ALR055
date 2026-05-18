import { useState } from "react";
import Home from "./Home";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "student" && password === "password") {
            setLoggedIn(true);
        } else if (username === "admin" && password === "admin") {
            alert("Admin login successful! Redirecting to admin dashboard...");
            // You can add navigation to admin dashboard here
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    if (loggedIn) {
        return <Home />;
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
            <a href="/signup">Don't have an account? Sign Up</a>
        </form>
    );
}
export default Login;