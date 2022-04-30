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
    updateCoursePlan,
    planId,
    updateEditedSemester,
    updateEditedCourse
}: {
    semesters: Semester[];
    deleteSemester: (id: string) => void;
    editSemester: (id: string, newSemester: Semester) => void;
    updateCoursePlan: (
        planId: string,
        semId: string,
        newCourse: Course
    ) => Plan[];
    planId: string;
    updateEditedSemester: (
        planId: string,
        semId: string,
        newSeason: string,
        newYear: number
    ) => Plan[];
    updateEditedCourse: (
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ) => Plan[];
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
                    updateCoursePlan={updateCoursePlan}
                    planId={planId}
                    updateEditedCourse={updateEditedCourse}
                    updateEditedSemester={updateEditedSemester}
                ></SemesterView>
            ))}
        </div>
    );
}
