import { useState } from "react";
import Home from "./Home";
import New from "./New";    
import View from "./View";
function Admin() {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome, Admin! Here you can manage the job portal.</p>
            <button onClick={() => <New />} > add new job</button>
            <button onClick={() => <View />} > view applications</button>
            <button> manage companies</button>
            <button> manage students    </button>
        </div>
    );
}