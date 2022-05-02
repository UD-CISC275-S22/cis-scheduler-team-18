import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { CourseEdit } from "./CourseEdit";
import { CourseInfo } from "./CourseInfo";

/**
 * Displays a table of the courses in a semester along with an edit button for each course which calls CourseEdit
 */
export function CourseView({
    planId,
    semId,
    courses,
    editCourse,
    deleteCourse,
    updateEditedCourse,
    updateDeletedCourse
}: {
    planId: string;
    semId: string;
    courses: Course[];
    editCourse: (id: string, newCourse: Course) => void;
    deleteCourse: (id: string) => void;
    updateEditedCourse: (
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ) => void;
    updateDeletedCourse: (
        planId: string,
        semId: string,
        courseCode: string
    ) => void;
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
                        <tr key={course.code}>
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>
                                <CourseEdit
                                    planId={planId}
                                    semId={semId}
                                    course={course}
                                    editCourse={editCourse}
                                    deleteCourse={deleteCourse}
                                    updateEditedCourse={updateEditedCourse}
                                    updateDeletedCourse={updateDeletedCourse}
                                ></CourseEdit>
                                <CourseInfo course={course}></CourseInfo>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
