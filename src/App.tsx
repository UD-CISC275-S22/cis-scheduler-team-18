import React from "react";
import "./App.css";
//import plan from "./data/semesterPlan.json";
//import { Plan } from "./interfaces/plan";

//const PLANS = plan.map((plan): Plan => ({ ...plan }));

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">Team 18 Page</header>
            <div>Abbey Walters</div>
            <div>Brielle Hina</div>
            <div>Mycah Detorres</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
