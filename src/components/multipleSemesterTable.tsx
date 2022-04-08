import React from "react";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import "../styleSheets/multipleSemesterTable.css";

export function MultipleSemesterTable({ plan }: { plan: Plan }): JSX.Element {
    //this function will return all the courses; organized by semester in a single plan
    //list of semesters
    const SEMESTER = plan.semesters.map((sem: Semester) => ({ ...sem }));
    return (
        <div className="container">
            {SEMESTER.map((sem: Semester) => (
                <div key={sem.id}>
                    <h4 className="semester">{sem.id}</h4>
                    <table className="table" key={sem.id}>
                        <thead>
                            <th>Course name</th>
                            <th>Course Title</th>
                            <th>Credits</th>
                        </thead>
                        <tbody className="body">
                            {sem.courses.map((course: Course) => (
                                <tr key={course.id}>
                                    <td>{course.courseName}</td>
                                    <td>{course.courseTitle}</td>
                                    <td>{course.credits}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}
