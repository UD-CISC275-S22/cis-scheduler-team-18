import React from "react";
import { Semester } from "../interfaces/Semester";
import { SemesterView } from "./SemesterView";
import "../styleSheets/multipleSemesterTable.css";
import { Course } from "../interfaces/Course";
import { Plan } from "../interfaces/Plan";

export function SemesterList({
    semesters,
    deleteSemester,
    editSemester,
    plan,
    plans,
    setPlans
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
    editSemester: (id: string, newSemester: Semester) => void;
    plan: Plan;
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
                ></SemesterView>
            ))}
        </div>
    );
}
