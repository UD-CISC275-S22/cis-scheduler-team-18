import React from "react";
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
    //make sure the tables stay in a nice format/gridlike
    //calls semesterview which will determine if we're in editing mode
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
