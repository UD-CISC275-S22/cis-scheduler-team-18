import React from "react";
import { Semester } from "../interfaces/semester";
import { SemesterView } from "./semesterView";
import "../styleSheets/multipleSemesterTable.css";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";

export function SemesterList({
    semesters,
    deleteSemester,
    editSemester,
    plan,
    updateEditedCourse,
    updateDeletedCourse,
    plans,
    setPlans
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
    editSemester: (id: string, newSemester: Semester) => void;
    plan: Plan;
    updateEditedCourse: (
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ) => void;
    updateDeletedCourse: (
        planId: string,
        semId: string,
        courseCode: string
    ) => void;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
}): JSX.Element {
    //make sure the tables stay in a nice format/gridlike
    //calls semesterview which will determine if we're in editing mode
    return (
        <div className="container">
            {semesters.map((sem: Semester) => (
                <SemesterView
                    plans={plans}
                    setPlans={setPlans}
                    key={sem.id}
                    semester={sem}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                    plan={plan}
                    updateEditedCourse={updateEditedCourse}
                    updateDeletedCourse={updateDeletedCourse}
                ></SemesterView>
            ))}
        </div>
    );
}
