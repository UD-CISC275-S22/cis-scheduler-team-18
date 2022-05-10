import React from "react";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import "../styleSheets/MultipleSemesterTable.css";
import { CourseList } from "./CourseList";

export function MultipleSemesterTable({
    planId,
    semester,
    updateCoursePlan,
    updateEditedCourse,
    updateDeletedCourse
}: {
    planId: string;
    semester: Semester;
    updateCoursePlan: (
        planId: string,
        semesterId: string,
        newCourse: Course
    ) => void;
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
}): JSX.Element {
    //this function will return all the courses; organized by semester in a single plan
    //im changing this to be a single semester passed in.
    //this is becuase I have semesterView calling this, which is already mapping an array of semesters
    //HYPOTHETICALLY, it should do the same thing
    //list of semesters
    //const SEMESTER = plan.semesters.map((sem: Semester) => ({ ...sem }));
    /*
    return (
        <div className="container">
            {SEMESTER.map((sem: Semester) => (
                <div key={sem.id}>

                    <h4 className="semester">
                        {sem.season} {sem.year}
                    </h4>
                    <h4 className="semester">{sem.id}</h4>
                    <CourseList semester={sem}></CourseList>
                </div>
            ))}
        </div>
    );
    */
    return (
        <div>
            <h4 className="semester">
                {semester.season} {semester.year}
            </h4>
            <CourseList
                planId={planId}
                semester={semester}
                updateCoursePlan={updateCoursePlan}
                updateEditedCourse={updateEditedCourse}
                updateDeletedCourse={updateDeletedCourse}
            ></CourseList>
        </div>
    );
}
