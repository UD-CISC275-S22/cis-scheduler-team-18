import "../styleSheets/degreeReqs.css";
import React from "react";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import coreReqs from "../data/coreMajorRequirements.json";

export function DegreeReq({ plan }: { plan: Plan }): JSX.Element {
    const coreMajorReqs = coreReqs.map((course): Course => ({ ...course }));
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

    function findEnglOpt(sem: Semester): void {
        //should find either engl312 or engl410
        const foundEngl = sem.courses.filter(
            (course: Course): boolean =>
                course.code === "ENGL312" || course.code === "ENGL410"
        );

        if (foundEngl.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "ENGL312 or ENGL410"
            ];
        }
    }

    function findMathOpt(sem: Semester): void {
        //should find either MATH205/MATH350
        const foundMath = sem.courses.filter(
            (course: Course): boolean =>
                course.code === "MATH205" || course.code === "MATH350"
        );

        if (foundMath.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "MATH205 or MATH350"
            ];
        }
    }

    function capstone(sem: Semester): void {
        //should find either CISC498/UNIV401
        const foundCap1 = sem.courses.filter(
            (course: Course): boolean =>
                course.code === "CISC498" || course.code == "UNIV401"
        );
        if (foundCap1.length !== 0 && foundCap1[0].code === "CISC498") {
            //find CISC499
            const foundCISC499 = sem.courses.filter(
                (course: Course) => course.code === "CISC499"
            );
            if (foundCISC499.length === 0) {
                missingRequirements = [...missingRequirements, "CISC499"];
            }
        }

        if (foundCap1.length !== 0 && foundCap1[0].code === "UNIV401") {
            //find UNIV402
            const foundUNIV402 = sem.courses.filter(
                (course: Course) => course.code === "UNIV402"
            );
            if (foundUNIV402.length === 0) {
                missingRequirements = [...missingRequirements, "UNIV402"];
            }
        }

        if (foundCap1.length === 0) {
            missingRequirements = [...missingRequirements, "Capstone", "DLE"];
        }
    }

    function checkCoreReqs(sem: Semester) {
        //includes returns true if an array contains a specified value
        //an array of coreREqs that are in the plan
        //to do
        const coreFound = sem.courses.filter((course: Course) =>
            coreMajorReqs.includes(course)
        );

        //now, add what's not included to missing requirements
    }

    function checkTechElect(sem: Semester){
        //existing data file
        //to do
    }

    function checkScienceReq(sem: Semester){
        //existing data file
        //to do
    }

    function checkEngineeringBreadths(sem: Semester){
        //no data file needed
        //to do
    }

    function countCredits(sem: Semester){
        //to do
    }

    function checkDLE(sem: Semester){
        //to do
    }

    function checkMultiCultural(sem: Semester){
        //to do
    }
    return <div className="boxed">This text is in an enclosed box</div>;
}
