import React from "react";
import { ListGroup } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
//import { SemesterEditor } from "../components/semesterEditor";

export function ReadOnlySemesters({
    semesters
}: {
    semesters: Semester[];
}): JSX.Element {
    return (
        <div>
            <ListGroup as="ol" numbered>
                {semesters.map((sem: Semester) => (
                    <ListGroup.Item as="li" key={sem.id}>
                        <div>
                            <div>
                                {sem.season} {sem.year}
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
}
