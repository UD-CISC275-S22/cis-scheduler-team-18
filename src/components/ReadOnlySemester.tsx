import React from "react";
import { ListGroup } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";

export function ReadOnlySemesters({
    semesters
}: {
    semesters: Semester[];
}): JSX.Element {
    return (
        <ListGroup as="ol" numbered>
            {semesters.map((sem: Semester) => (
                <ListGroup.Item as="li" key={sem.id}>
                    <div>
                        {sem.season} {sem.year}
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}
