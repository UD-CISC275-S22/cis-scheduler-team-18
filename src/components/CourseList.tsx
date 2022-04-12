import React from "react";
import { Button, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";

/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList({ semester }: { semester: Semester }): JSX.Element {
    const courses: Course[] = [...semester.courses];
    return (
        <Table>
            <thead>
                <th>Course Name</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Edit Course</th>
            </thead>
            <tbody>
                {courses.map((course: Course) => (
                    <tr key={course.id}>
                        <td>{course.courseName}</td>
                        <td>{course.courseTitle}</td>
                        <td>{course.credits}</td>
                        <td>
                            <Button>Edit Course</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
