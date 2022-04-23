import "../styleSheets/degreeReqs.css";
import React from "react";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export function DegreeReq({ plan }: { plan: Plan }): JSX.Element {
    //make sure there is at least one group A Requirement
    //plan > semester > courses
    let missingRequirements: string[] = [""];

    function checkGroupA(sem: Semester): void {
        //map through the semester's courses
        //change it to check "GROUP A"
        //String.indexOf() method --> returns the index of the first occurrence of the specified substring
        //inside the calling string object, if it's not found, it returns -1
        const found = sem.courses.map((course: Course): number =>
            course.breadth.indexOf("GROUP A")
        );

        const foundGroupA = found.filter(
            (index: number): boolean => index !== -1
        );

        if (foundGroupA.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group A: Creative Arts & Humanities"
            ];
        }
    }

    function checkGroupB(sem: Semester): void {
        const found = sem.courses.map((course: Course): number =>
            course.breadth.indexOf("GROUP B")
        );

        const foundGroupB = found.filter(
            (index: number): boolean => index !== -1
        );

        if (foundGroupB.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group B: A&S History & Cultural Change"
            ];
        }
    }

    function checkGroupC(sem: Semester): void {
        const found = sem.courses.map((course: Course): number =>
            course.breadth.indexOf("Group C")
        );

        const foundGroupC = found.filter(
            (index: number): boolean => index !== -1
        );

        if (foundGroupC.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group C: A&S Social & Behavioral Sciences"
            ];
        }
    }

    function checkGroupD(sem: Semester): void {
        const found = sem.courses.map((course: Course): number =>
            course.breadth.indexOf("Group D")
        );

        const foundGroupD = found.filter(
            (index: number): boolean => index !== -1
        );

        if (foundGroupD.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group D: A&S Math, Nat Sci & Technology"
            ];
        }
    }
    return <div className="boxed">This text is in an enclosed box</div>;
}
