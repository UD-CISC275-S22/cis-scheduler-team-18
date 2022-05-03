import React from "react";
import { Table } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseEdit } from "./CourseEdit";
import { CourseInfo } from "./CourseInfo";

/**
 * Displays a table of the courses in a semester along with an edit button for each course which calls CourseEdit
 */
export function CourseView({
    courses,
    editCourse,
    deleteCourse,
    addCourse
}: {
    courses: Course[];
    editCourse: (id: string, newCourse: Course) => void;
    deleteCourse: (id: string) => void;
    addCourse: (newCourse: Course) => void;
    setCourses: (courseList: Course[]) => void;
    semester: Semester;
}): JSX.Element {
    const dragStartHandler = (
        event: React.DragEvent<HTMLDivElement>,
        data: Course
    ) => {
        const courseCopy = { ...data };
        event.dataTransfer.setData("text", JSON.stringify(courseCopy));
    };

    const dropHandlerTable = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        addCourse(JSON.parse(data));
    };

    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const dragEndHandler = (
        event: React.DragEvent<HTMLDivElement>,
        myCourseId: string
    ) => {
        deleteCourse(myCourseId);
    };

    return (
        <div>
            <Table>
                <thead>
                    <th>Course Name</th>
                    <th>Course Title</th>
                    <th>Credits</th>
                    <th>Edit Course</th>
                </thead>
                <tbody
                    key="tableBody"
                    onDrop={(event) => dropHandlerTable(event)}
                >
                    {courses.map((course: Course) => (
                        <tr
                            key={course.code}
                            className={course.code}
                            onDragStart={(event) =>
                                dragStartHandler(event, course)
                            }
                            draggable={true}
                            onDragOver={allowDrop}
                            onDragEnd={(event) =>
                                dragEndHandler(event, course.code)
                            }
                            //onDrop={(event) => dropHandler2(event, course)}
                        >
                            <td>{course.code}</td>
                            <td>{course.name}</td>
                            <td>{course.credits}</td>
                            <td>
                                <CourseEdit
                                    course={course}
                                    editCourse={editCourse}
                                    deleteCourse={deleteCourse}
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
