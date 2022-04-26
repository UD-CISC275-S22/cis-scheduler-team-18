import React from "react";
import { ListGroup } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function ReadOnlyCourses({
    courses
}: {
    courses: Course[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {courses.map((course: Course) => (
                <ListGroup.Item as="li" key={course.code}>
                    <div>{course.code}</div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
