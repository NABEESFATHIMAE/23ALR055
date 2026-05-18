import { useState } from "react";
import Applied from "./Applied";
import Eligible from "./Eligible";
function View() {
    const [view, setView] = useState("all");
    return (
        <div>
            <h1>Welcome to the Job Portal</h1>
            <button onClick={() => setView("all")}>All Companies</button>
            <button onClick={() => setView("applied")}>Applied Companies</button>
            <button onClick={() => setView("eligible")}>Eligible Companies</button> 
                {view === "eligible" && <Eligible />}
            {view === "all" && <All />}
            {view === "applied" && <Applied />}
        </div>
    );
}       
export default View;    
