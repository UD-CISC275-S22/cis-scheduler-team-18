import "../styleSheets/degreeReqs.css";
import React from "react";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import coreReqs from "../data/coreMajorRequirements.json";
//import techReqs from "../data/techElect.json";
import scienceReq from "../data/scienceRequirement.json";
import multiCultReq from "../data/multiCulturalReq.json";
import englOpt from "../data/englOption.json";
import DLEReq from "../data/DLEReq.json";
import mathOpt from "../data/mathOpt.json";

export function CheckDegreeReq({ plan }: { plan: Plan }): JSX.Element {
    //files: coreMajorRequirements, DLEReq, englOption, multiculturalReq, scienceRequirement, techElect, mathOption

    //core requirements: an array of Course Objects that are the coreReqs -- THESE NEED TO BE TAKEN
    const CORES = coreReqs.map(
        (course: Course): Course => ({
            ...course
        })
    );

    //DLEReqs: an array of Course Objects that are DLE options -- ANY OF THESE CAN BE TAKEN (3 credits)
    const DLE = DLEReq.map((course: Course): Course => ({ ...course }));

    //ENGLOPT: ONE of the two of these classes need to be taken
    const ENGL = englOpt.map((course: Course): Course => ({ ...course }));

    //MATHOPT: ONE of the two of these classes need to be taken
    const MATH = mathOpt.map((course: Course): Course => ({ ...course }));

    //multiculturalREQ: ONE of these classes need to be taken (3 credits)
    const MULTICULTURAL = multiCultReq.map(
        (course: Course): Course => ({ ...course })
    );

    //science requirement: a sequence is needed + additional (12 credits in total)
    const SCIENCE = scienceReq.map((course: Course): Course => ({ ...course }));

    //to do: figure out how to make one function call everything to create the missingRequirements string
    //this is going to keep track of all the missing requirements
    let missingRequirements: string[] = [""];

    //this is just a test to make sure everything is printing out right
    missingRequirements = [...missingRequirements, "Test"];

    //make sure there's at least 1 group A requirement - for university req
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

    //make sure there's at least one GROUP B breadth - for university
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

    //make sure there's at least one group C req - University breadth
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

    //make sure there's at least one group d - university breadth
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

    //will check to see if engl312/engl410 is present
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

    //will determine if math350/math205 is present
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

    //will determine if there is a capstone found
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
            missingRequirements = [...missingRequirements, "Capstone"];
        }
    }

    function checkCoreReqs(sem: Semester) {
        //to do
        //data file
    }

    function checkTechElect(sem: Semester) {
        //existing data file
        //to do
    }

    function checkScienceReq(sem: Semester) {
        //existing data file
        //to do
    }

    function checkEngineeringBreadths(sem: Semester) {
        //no data file needed
        //to do
    }

    function countCredits(sem: Semester) {
        //to do
    }

    function checkDLE(sem: Semester) {
        //to do
    }

    function checkMultiCultural(sem: Semester) {
        //to do
    }
    return (
        <div className="boxed">
            {missingRequirements.map((req: string) => (
                <div key="req">{req}</div>
            ))}
        </div>
    );
}
