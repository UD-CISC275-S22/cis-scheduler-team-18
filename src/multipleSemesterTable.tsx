import React from "react";
import { Table } from "react-bootstrap";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";
import { CourseList } from "./CourseList";
import { Z_ASCII } from "zlib";
import { SingleSemester } from "./SingleSemester";

export function MultipleSemesterTable({ plan }: { plan: Plan }): JSX.Element {
    const SEMESTER = plan.semesters.map((sem: Semester) => ({ ...sem }));
    return (
        <div>
            {SEMESTER.map((sem: Semester) => (
                <Table key={sem.id}>
                    <thead>
                        <th>Course name</th>
                        <th>Course Title</th>
                        <th>Credits</th>
                    </thead>
                    <tbody>
                        {sem.courses.map((course: Course) => (
                            <tr key={course.id}>
                                <td>{course.courseName}</td>
                                <td>{course.courseTitle}</td>
                                <td>{course.credits}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ))}
        </div>
    );
}
