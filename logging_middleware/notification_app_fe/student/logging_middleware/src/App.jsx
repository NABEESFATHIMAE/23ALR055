import Login from "./Login";
import { useState } from "react";
import { useEffect } from "react";
function App() {
    const [logs, setLogs] = useState([]);
    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await fetch("/api/logs");
                const data = await response.json();
                setLogs(data);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };
        fetchLogs();
    }, []);
    return (
        <div>
            <Login />
            



            </div>    );
}   
export default App;       