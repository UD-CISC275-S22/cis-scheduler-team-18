import React from "react";
//import { Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./semesterView";
import "../styleSheets/multipleSemesterTable.css";

export function SemesterList({
    semesters,
    deleteSemester,
    editSemester
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
    editSemester: (id: string, newSemester: Semester) => void;
}): JSX.Element {
    return (
        <div className="container">
            {semesters.map((sem: Semester) => (
                <SemesterView
                    key={sem.id}
                    semester={sem}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterView>
            ))}
        </div>
    );
}
