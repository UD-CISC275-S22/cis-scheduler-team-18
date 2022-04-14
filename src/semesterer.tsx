//App: Plan
//Semesterer: Semester
import React, { useState } from "react";
import semesterPlan from "./data/semesterPlan.json";
import { Semester } from "./interfaces/semester";
import { Plan } from "./interfaces/plan";
import { SemesterList } from "./components/semesterList";

export function Semesterer({ plans }: { plans: Plan[] }): JSX.Element {
    const [semesters, setSemesters] = useState<Semester[]>(SEMESTERS);

    function editSemester(id: string, newSemester: Semester) {
        setSemesters(
            SEMESTERS.map(
                (semester: Semester): Semester =>
                    semester.id === id ? newSemester : semester
            )
        );
    }

    function deleteSemester(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
    }
    return (
        <div>
            <div>
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                ></SemesterList>
            </div>
        </div>
    );
}