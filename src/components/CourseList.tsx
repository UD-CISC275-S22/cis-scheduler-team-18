import React from "react";
import { Button, Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseEdit } from "./CourseEdit";

/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList({ semester }: { semester: Semester }): JSX.Element {
    function OpenCourseEdit({ course }: { course: Course }) {
        return (
            <div>
                <CourseEdit course={course}></CourseEdit>
            </div>
        );
    }
    return (
        <Table>
            <thead>
                <th>Course Name</th>
                <th>Course Title</th>
                <th>Credits</th>
                <th>Edit Course</th>
            </thead>
            <tbody>
                {semester.courses.map((course: Course) => (
                    <tr key={course.id}>
                        <td>{course.courseName}</td>
                        <td>{course.courseTitle}</td>
                        <td>{course.credits}</td>
                        <td>
                            <Button onClick={() => OpenCourseEdit({ course })}>
                                Edit Course
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
