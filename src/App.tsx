import React from "react";
import "./App.css";
import { MultipleSemesterCourses } from "./MultipleSemesterCourse";

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
            <div>
                <MultipleSemesterCourses></MultipleSemesterCourses>
            </div>
        </div>
    );
}

export default App;
