import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseEdit } from "./CourseEdit";

export interface CourseListProps {
    setCourses: (newCourses: Course[]) => void;
    courses: Course[];
}
/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList({ semester }: { semester: Semester }): JSX.Element {
    const [courses, setCourses] = useState<Course[]>([...semester.courses]);
    function updateCourses(course: Course) {
        const newCourses = courses.map((cor: Course) =>
            cor.id === course.id ? course : cor
        );
        setCourses(newCourses);
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
                {courses.map((course: Course) => (
                    <tr key={course.id}>
                        <td>{course.courseName}</td>
                        <td>{course.courseTitle}</td>
                        <td>{course.credits}</td>
                        <td>
                            <CourseEdit course={course}></CourseEdit>
                            {updateCourses(course)}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
