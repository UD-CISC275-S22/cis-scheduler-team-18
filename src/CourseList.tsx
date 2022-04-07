import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";

/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList(semester: Semester): JSX.Element {
    //returns a ListGroup of horizontal ListGroups listing information from each course in a semester
    return (
        <Table>
            <thead>
                <th>Course Name</th>
                <th>Course Title</th>
                <th>Credits</th>
            </thead>
            <tbody>
                {semester.courses.map((course: Course) => (
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
