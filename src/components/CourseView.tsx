import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEdit } from "./CourseEdit";

export function CourseView({
    courses,
    editCourse
}: {
    courses: Course[];
    editCourse: (id: string, newCourse: Course) => void;
}): JSX.Element {
    return (
        <div>
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
                                <CourseEdit
                                    course={course}
                                    editCourse={editCourse}
                                ></CourseEdit>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
