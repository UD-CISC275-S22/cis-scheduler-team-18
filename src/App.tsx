import React from "react";
import "./App.css";
import { CourseList } from "./CourseList";
import data from "./data/semesterPlan.json";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";
//import plan from "./data/semesterPlan.json";
//import { Plan } from "./interfaces/plan";

//const PLANS = plan.map((plan): Plan => ({ ...plan }));

function App(): JSX.Element {
    const exampleSem: Semester = {
        id: "fall20",
        season: "fall",
        year: 2020,
        courses: [
            {
                id: "EGG101",
                courseName: "EGGG101",
                courseTitle: "Intro to Engineering",
                credits: 2,
                required: true,
                preReq: false
            },
            {
                id: "CISC108",
                courseName: "CISC108",
                courseTitle: "Intro to Computer Science I",
                credits: 3,
                required: true,
                preReq: false
            },
            {
                id: "MATH241",
                courseName: "MATH241",
                courseTitle: "Analytic Geometry & Calculus A",
                credits: 4,
                required: true,
                preReq: true
            },
            {
                id: "ENGL110",
                courseName: "ENGL110",
                courseTitle: "Seminar in Composition",
                credits: 3,
                required: true,
                preReq: false
            },
            {
                id: "AFRA220",
                courseName: "AFRA220",
                courseTitle: "Race in Society",
                credits: 3,
                required: true,
                preReq: false
            }
        ]
    };

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
                <CourseList {...exampleSem}></CourseList>
            </div>
        </div>
    );
}

export default App;
