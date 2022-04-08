import React from "react";
import { Table } from "react-bootstrap";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
//import { Plan } from "./interfaces/plan";
import { Course } from "./interfaces/course";
export function MultipleSemesterTable({
    plans
}: {
    plans: Plan[];
}): JSX.Element {
    return (
        <Table>
            <thead>
                {plans[0].semesters.map((sem: Semester) => (
                    <tr key={sem.id}>
                        <th colSpan={3}>
                            {sem.season} {sem.year}
                            <tr>
                                <th>Course Name</th>
                                <th>Course Title</th>
                                <th>Credits</th>
                            </tr>
                        </th>
                    </tr>
                ))}
            </thead>
            <tbody>
                {plans[0].semesters[0].courses.map((course: Course) => (
                    <tr key={course.id}>
                        <td>{course.courseName}</td>
                        <td>{course.courseTitle}</td>
                        <td>{course.credits}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
