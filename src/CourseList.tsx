import React from "react";
import { ListGroup } from "react-bootstrap";
import { Course } from "./interfaces/course";

/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList({ courses }: { courses: Course[] }): JSX.Element {
    return (
        <ListGroup>
            {courses.map((course: Course) => (
                <ListGroup.Item as="li" key={course.id}></ListGroup.Item>
            ))}
        </ListGroup>
    );
}
