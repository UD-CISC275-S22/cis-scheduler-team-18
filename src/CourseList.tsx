import React from "react";
import { ListGroup } from "react-bootstrap";
import { Course } from "./interfaces/course";
import { Semester } from "./interfaces/semester";

/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList(semester: Semester): JSX.Element {
    //returns a ListGroup of horizontal ListGroups listing information from each course in a semester
    return (
        <ListGroup>
            <ListGroup.Item>
                <ListGroup horizontal>
                    <ListGroup.Item>Course Name</ListGroup.Item>
                    <ListGroup.Item>Course Title</ListGroup.Item>
                    <ListGroup.Item>Credits</ListGroup.Item>
                </ListGroup>
            </ListGroup.Item>
            {semester.courses.map((course: Course) => (
                <ListGroup.Item key={course.id}>
                    <ListGroup horizontal>
                        <ListGroup.Item>{course.courseName}</ListGroup.Item>
                        <ListGroup.Item>{course.courseTitle}</ListGroup.Item>
                        <ListGroup.Item>{course.credits}</ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
