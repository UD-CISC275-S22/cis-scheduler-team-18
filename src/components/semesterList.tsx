import React from "react";
import { Stack } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./semesterView";

export function semesterList({
    semester,
    deleteSemester,
    editSemester
}: {
    semester: Semester;
    deleteSemester: (id: string) => void;
    editSemester: (id: string, newSemester: Semester) => void;
}): JSX.Element {
    return (
        <div>
            <SemesterView
                semester={semester}
                editSemester={editSemester}
                deleteSemester={deleteSemester}
            ></SemesterView>
        </div>
    );
}