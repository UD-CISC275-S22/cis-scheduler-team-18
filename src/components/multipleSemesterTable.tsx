import React from "react";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import "../styleSheets/multipleSemesterTable.css";
import { CourseList } from "./CourseList";

export function MultipleSemesterTable({ plan }: { plan: Plan }): JSX.Element {
    //this function will return all the courses; organized by semester in a single plan
    //list of semesters
    const SEMESTER = plan.semesters.map((sem: Semester) => ({ ...sem }));
    return (
        <div className="container">
            {SEMESTER.map((sem: Semester) => (
                <div key={sem.id}>
                    {/*Semester view - editing or not editing - if not editing then*/}
                    <h4 className="semester">
                        {sem.season}
                        {sem.year}
                    </h4>
                    <CourseList semester={sem}></CourseList>
                </div>
            ))}
        </div>
    );
}
