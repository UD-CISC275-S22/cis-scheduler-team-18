import "../styleSheets/degreeReqs.css";
import React from "react";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import coreReqs from "../data/coreMajorRequirements.json";
import techReqs from "../data/techElect.json";
import scienceReq from "../data/scienceRequirement.json";
import multiCultReq from "../data/multiCulturalReq.json";
import DLEReq from "../data/DLEReq.json";

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

    //multiculturalREQ: ONE of these classes need to be taken (3 credits)
    const MULTICULTURAL = multiCultReq.map(
        (course: Course): Course => ({ ...course })
    );

    //science requirement: a sequence is needed + additional (12 credits in total)
    const SCIENCE = scienceReq.map((course: Course): Course => ({ ...course }));

    //techElect: 6 credits any 2 of these
    const TECHELECT = techReqs.map((course: Course): Course => ({ ...course }));

    //this is going to keep track of all the missing requirements
    let missingRequirements: string[] = [""];

    function checkBreadths(classes: Course[]): void {
        //find all theh breadth requirements in a semester
        const groupA = classes.filter((course: Course): boolean =>
            course.breadth.includes(
                "GROUP A" || "GROUPA" || "group A" || "group a"
            )
        );

        const groupB = classes.filter((course: Course): boolean =>
            course.breadth.includes(
                "GROUP B" || "GROUPB" || "group B" || "group b"
            )
        );

        const groupC = classes.filter((course: Course): boolean =>
            course.breadth.includes(
                "GROUP C" || "GROUPC" || "group C" || "group c"
            )
        );

        const groupD = classes.filter((course: Course): boolean =>
            course.breadth.includes(
                "GROUP D" || "GROUPD" || "group D" || "group d"
            )
        );
        let groupACredits = 0;
        let groupBCredits = 0;
        let groupCCredits = 0;
        let groupDCredits = 0;
        for (const cred of groupA) {
            groupACredits += parseInt(cred.credits);
        }

        for (const cred of groupB) {
            groupBCredits += parseInt(cred.credits);
        }

        for (const cred of groupC) {
            groupCCredits += parseInt(cred.credits);
        }

        for (const cred of groupD) {
            groupDCredits += parseInt(cred.credits);
        }

        //what do we need
        //at least 3 credits in group A, group B, group C, group D

        if (groupACredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group A"
            ];
        }

        if (groupBCredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group B"
            ];
        }

        if (groupCCredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group C"
            ];
        }

        if (groupDCredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group D"
            ];
        }

        //9 additional breadths NOT group D
        const totalCreds =
            groupACredits + groupBCredits + groupCCredits + groupDCredits;
        //test for coe breadths
        if (totalCreds < 21 || totalCreds - groupDCredits < 18) {
            missingRequirements = [
                ...missingRequirements,
                "College of Engineering Breadths: 9 Credits Necessary"
            ];
        } else if (totalCreds >= 21 && totalCreds - groupDCredits >= 18) {
            //test for 6 credits being upper level
            //to do: need to implement upper foreign language courses
            const upperLevelA = groupA.filter((course: Course): boolean =>
                course.code.includes("3" || "4" || "5" || "6" || "7" || "8")
            );
            const upperLevelB = groupB.filter((course: Course): boolean =>
                course.code.includes("3" || "4" || "5" || "6" || "7" || "8")
            );
            const upperLevelC = groupC.filter((course: Course): boolean =>
                course.code.includes("3" || "4" || "5" || "6" || "7" || "8")
            );
            const upperLevelD = groupD.filter((course: Course): boolean =>
                course.code.includes("3" || "4" || "5" || "6" || "7" || "8")
            );

            let upperACredit = 0;
            let upperBCredit = 0;
            let upperCCredit = 0;
            let upperDCredit = 0;
            for (const cred of upperLevelA) {
                upperACredit += parseInt(cred.credits);
            }
            for (const cred of upperLevelB) {
                upperBCredit += parseInt(cred.credits);
            }
            for (const cred of upperLevelC) {
                upperCCredit += parseInt(cred.credits);
            }
            for (const cred of upperLevelD) {
                upperDCredit += parseInt(cred.credits);
            }
            const totalUpperCred =
                upperACredit + upperBCredit + upperCCredit + upperDCredit;

            if (totalUpperCred < 6) {
                missingRequirements = [
                    ...missingRequirements,
                    "College of Engineering Breadth: 6 Upper Level Credits Necessary"
                ];
            }
        }
    }

    function checkMultiCultural(classes: Course[]) {
        const multiCodes = MULTICULTURAL.map(
            (course: Course): string => course.code
        );
        //MULTICULTURAL: An array of courses that qualify as a multicultural course
        //do the includes thing, but check to see if multicultural includes a course

        //this is an array of all the multiCodes that include the course code
        const findMulti = classes.filter((course: Course): boolean =>
            multiCodes.includes(course.code)
        );

        if (findMulti.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "University Requirement: Multicultural"
            ];
        }
    }

    function checkDLE(classes: Course[]) {
        const dleCodes = DLE.map((course: Course): string => course.code);

        const findDLE = classes.filter((course: Course): boolean =>
            dleCodes.includes(course.code)
        );

        if (findDLE.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "University Requirement: DLE"
            ];
        }
    }

    function checkCapstone(classes: Course[]) {
        //can either be CISC498 + CISC499 or UNIV401 + UNIV 402
        const CISC = classes.find(
            (course: Course): boolean =>
                course.code === "CISC498" || course.code === "CISC 499"
        );

        const UNIV = classes.find(
            (course: Course): boolean =>
                course.code === "UNIV401" || course.code === "UNIV 401"
        );

        if (CISC) {
            const CISC2 = classes.find(
                (course: Course): boolean =>
                    course.code === "CISC499" || course.code === "CISC 499"
            );

            if (!CISC2) {
                missingRequirements = [
                    ...missingRequirements,
                    "Capstone Requirement: CISC499"
                ];
            }
        } else if (UNIV) {
            const UNIV2 = classes.find(
                (course: Course): boolean =>
                    course.code === "UNIV402" || course.code === "UNIV 402"
            );

            if (!UNIV2) {
                missingRequirements = [
                    ...missingRequirements,
                    "Capstone Requirement: UNIV402"
                ];
            }
        } else {
            missingRequirements = [
                ...missingRequirements,
                "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
            ];
        }
    }

    function checkMath(classes: Course[]) {
        const MATH205 = classes.find(
            (course: Course): boolean =>
                course.code === "MATH205" || course.code === "MATH 205"
        );
        const MATH350 = classes.find(
            (course: Course): boolean =>
                course.code === "MATH350" || course.code === "MATH 350"
        );

        if (!MATH205 && !MATH350) {
            missingRequirements = [
                ...missingRequirements,
                "MATH205 or MATH350"
            ];
        }
    }

    function checkEngl(classes: Course[]) {
        const ENGL312 = classes.find(
            (course: Course): boolean =>
                course.code === "ENGL312" || course.code === "ENGL 312"
        );
        const ENGL410 = classes.find(
            (course: Course): boolean =>
                course.code === "ENGL410" || course.code === "ENGL 410"
        );

        if (!ENGL312 && !ENGL410) {
            missingRequirements = [
                ...missingRequirements,
                "ENGL312 or ENGL410"
            ];
        }
    }
    plan.semesters.map((sem: Semester) => checkBreadths(sem.courses));
    plan.semesters.map((sem: Semester) => checkMultiCultural(sem.courses));
    plan.semesters.map((sem: Semester) => checkDLE(sem.courses));
    plan.semesters.map((sem: Semester) => checkCapstone(sem.courses));
    plan.semesters.map((sem: Semester) => checkMath(sem.courses));
    plan.semesters.map((sem: Semester) => checkEngl(sem.courses));
    return (
        <div className="boxed">
            {missingRequirements.map((req: string) => (
                <div key={req}>{req}</div>
            ))}
        </div>
    );
}
