import React from "react";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import "../styleSheets/multipleSemesterTable.css";
import { CourseList } from "./CourseList";
import { Plan } from "../interfaces/plan";

export function MultipleSemesterTable({
    plan,
    semester,
    plans,
    setPlans
}: {
    plan: Plan;
    semester: Semester;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
}): JSX.Element {
    return (
        <div>
            <h4 className="semester">
                {semester.season} {semester.year}
            </h4>
            <CourseList
                plans={plans}
                setPlans={setPlans}
                plan={plan}
                semester={semester}
            ></CourseList>
        </div>
    );
}
