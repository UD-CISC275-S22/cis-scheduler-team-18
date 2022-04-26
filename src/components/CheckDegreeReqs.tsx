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
import { useState } from "react";
import { Form } from "react-bootstrap";
import ai from "../data/ai.json";
import bioInformatics from "../data/bioinformatics.json";
import cybersecurity from "../data/cybersecurity.json";
import dataScience from "../data/dataScience.json";
import highPerformance from "../data/highPerf.json";
import systemsNetwork from "../data/systemsNetworks.json";
import theoryandComp from "../data/TheoryandComputation.json";

//TO DO:
//implement a check for upper level language courses
//implement a button to choose your concentration, and then check that

export function CheckDegreeReq({ plan }: { plan: Plan }): JSX.Element {
    //will be used to chose a concentration
    const [concentrat, setConcentrat] = useState<string>("");
    function updateConcentrat(event: React.ChangeEvent<HTMLSelectElement>) {
        setConcentrat(event.target.value);
    }

    const SEMS = plan.semesters.map((sem: Semester): Semester => ({ ...sem }));
    let COURSES: Course[] = [];
    for (const sem of SEMS) {
        const courselist = sem.courses.map(
            (course: Course): Course => ({ ...course })
        );
        COURSES = COURSES.concat(courselist);
    }

    const [courses] = useState<Course[]>(COURSES);
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

    //ai concentration
    const AI = ai.map((course: Course): Course => ({ ...course }));

    //bioInform concentrat
    const BIOINFORMATICS = bioInformatics.map(
        (course: Course): Course => ({ ...course })
    );

    //cyberSecurity concentrat
    const CYBERSECURITY = cybersecurity.map(
        (course: Course): Course => ({ ...course })
    );

    //dataScience
    const DATASICENCE = dataScience.map(
        (course: Course): Course => ({ ...course })
    );

    //highPerformance
    const HIGHPERFORMANCE = highPerformance.map(
        (course: Course): Course => ({ ...course })
    );

    //systemsNetwork
    const SYSTEMSNETWORK = systemsNetwork.map(
        (course: Course): Course => ({ ...course })
    );

    //theoryandComp
    const THEORYANDCOMP = theoryandComp.map(
        (course: Course): Course => ({ ...course })
    );

    function checkBreadths(classes: Course[]): void {
        //find all the breadth requirements in a semester
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
        //making a variable to hold teh amount of credits each breadth has
        let groupACredits = 0;
        let groupBCredits = 0;
        let groupCCredits = 0;
        let groupDCredits = 0;
        //add credits in groupA
        for (const cred of groupA) {
            groupACredits += parseInt(cred.credits);
        }
        //add credits in groupB
        for (const cred of groupB) {
            groupBCredits += parseInt(cred.credits);
        }
        //add credits in groupC
        for (const cred of groupC) {
            groupCCredits += parseInt(cred.credits);
        }
        //add credits in groupD
        for (const cred of groupD) {
            groupDCredits += parseInt(cred.credits);
        }

        //what do we need
        //at least 3 credits in group A, group B, group C, group D

        //missing group a
        if (groupACredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group A"
            ];
        }

        //missing group b
        if (groupBCredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group B"
            ];
        }

        //missing group c
        if (groupCCredits < 3) {
            missingRequirements = [
                ...missingRequirements,
                "University Breadth: Group C"
            ];
        }

        //missing group d
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
                "College of Engineering Breadths: 9 Credits Necessary NOT Group D"
            ];
        } else if (totalCreds >= 21 && totalCreds - groupDCredits >= 18) {
            //test for 6 credits being upper level
            //to do: need to implement upper foreign language courses
            //not a perfect theorem
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
            //counts the credits for the upper level breadths
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

    function checkCoreCourses(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const coreCodes = CORES.map((course: Course): string => course.code);
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = coreCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkTechElect(classes: Course[]) {
        const techElectCodes = TECHELECT.map(
            (course: Course): string => course.code
        );

        const findTechElect = classes.filter((course: Course): boolean =>
            techElectCodes.includes(course.code)
        );

        if (findTechElect.length < 2) {
            missingRequirements = [
                ...missingRequirements,
                "Major Requirement: Tech Electives - CISC301+ (6 credits)"
            ];
        }
    }
    function checkScienceSeq(classes: Course[]) {
        const scienceCodes = SCIENCE.map(
            (course: Course): string => course.code
        );

        const findScience = classes.filter((course: Course): boolean =>
            scienceCodes.includes(course.code)
        );

        if (findScience.length === 1) {
            //if it's PHYS207
            if (findScience[0].code === "PHYS207") {
                missingRequirements = [...missingRequirements, "PHYS208"];
            }
            if (
                findScience[0].code === "CHEM103" ||
                findScience[0].code === "CHEM133"
            ) {
                missingRequirements = [
                    ...missingRequirements,
                    "CHEM104 + CHEM134"
                ];
            }
            if (findScience[0].code === "CHEM107") {
                missingRequirements = [...missingRequirements, "CHEM108"];
            }
            if (findScience[0].code === "BISC207") {
                missingRequirements = [...missingRequirements, "BISC208"];
            }
            if (
                findScience[0].code === "GEOL105" ||
                findScience[0].code === "GEOL115"
            ) {
                missingRequirements = [...missingRequirements, "GEOL107"];
            }
            if (findScience[0].code === "GEOL107") {
                missingRequirements = [...missingRequirements, "GEOL110"];
            }
        }
        if (findScience.length === 0) {
            missingRequirements = [
                ...missingRequirements,
                "Science Sequence Requirement",
                "4 Credits Additional Science"
            ];
        }
        if (findScience.length === 2) {
            if (
                ((findScience[0].code === "PHYS207" ||
                    findScience[0].code === "PHYS208") &&
                    (findScience[1].code === "PHYS208" ||
                        findScience[1].code === "PHYS207")) ||
                ((findScience[0].code === "CHEM107" ||
                    findScience[0].code === "CHEM108") &&
                    (findScience[1].code === "CHEM107" ||
                        findScience[1].code === "CHEM108")) ||
                ((findScience[0].code === "GEOL107" ||
                    findScience[0].code === "GEOL110") &&
                    (findScience[1].code === "GEOL107" ||
                        findScience[1].code === "GEOL110")) ||
                ((findScience[0].code === "BISC207" ||
                    findScience[0].code === "BISC208") &&
                    (findScience[1].code === "BISC207" ||
                        findScience[1].code === "BISC208"))
            ) {
                missingRequirements = [
                    ...missingRequirements,
                    "Major Requirement: 4 additional Lab science Credits"
                ];
            }
            if (
                (findScience[0].code === "GEOL105" ||
                    findScience[0].code === "GEOL115") &&
                (findScience[1].code === "GEOL105" ||
                    findScience[1].code === "GEOL115")
            ) {
                missingRequirements = [...missingRequirements, "GEOL107"];
            }
            if (
                (findScience[0].code === "CHEM103" ||
                    findScience[0].code === "CHEM133") &&
                (findScience[1].code === "CHEM103" ||
                    findScience[1].code === "CHEM134")
            ) {
                missingRequirements = [
                    ...missingRequirements,
                    "CHEM104 + CHEM134"
                ];
            }
        }
        if (findScience.length === 3) {
            if (
                (findScience[0].code === "GEOL105" ||
                    findScience[0].code === "GEOL115" ||
                    findScience[0].code === "GEOL107") &&
                (findScience[1].code === "GEOL105" ||
                    findScience[1].code === "GEOL115" ||
                    findScience[1].code === "GEOL107") &&
                (findScience[2].code === "GEOL105" ||
                    findScience[2].code === "GEOL115" ||
                    findScience[2].code === "GEOL107")
            ) {
                missingRequirements = [
                    ...missingRequirements,
                    "Major Requirement: 4 additional Lab science Credits"
                ];
            }
        }
        if (findScience.length === 4) {
            if (
                (findScience[0].code === "CHEM103" ||
                    findScience[0].code === "CHEM133" ||
                    findScience[0].code === "CHEM104" ||
                    findScience[0].code === "CHEM134") &&
                (findScience[1].code === "CHEM103" ||
                    findScience[1].code === "CHEM133" ||
                    findScience[1].code === "GHEM104" ||
                    findScience[1].code === "CHEM134") &&
                (findScience[2].code === "CHEM103" ||
                    findScience[2].code === "CHEM133" ||
                    findScience[2].code === "CHEM104" ||
                    findScience[2].code === "CHEM134") &&
                (findScience[3].code === "CHEM103" ||
                    findScience[3].code === "CHEM133" ||
                    findScience[3].code === "CHEM104" ||
                    findScience[3].code === "CHEM134")
            ) {
                missingRequirements = [
                    ...missingRequirements,
                    "Major Requirement: 4 additional Lab science Credits"
                ];
            }
        }
    }

    function addCredits(classes: Course[]) {
        const classCredit = classes.map(
            (course: Course): number => parseInt(course.credits) || 0
        );

        const totalCredit = classCredit.reduce(
            (sum: number, num: number) => sum + num,
            0
        );

        if (totalCredit < 124) {
            missingRequirements = [
                ...missingRequirements,
                "124 Credits Needed"
            ];
        }
    }

    function checkAIConcent(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const AICodes = AI.map((course: Course): string => course.code);
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = AICodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkbioInfConcentrat(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const bioInfCodes = BIOINFORMATICS.map(
            (course: Course): string => course.code
        );
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = bioInfCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkCyberSecConcent(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const cyberCodes = CYBERSECURITY.map(
            (course: Course): string => course.code
        );
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = cyberCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkDataScienceConcent(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const dataScienceCodes = DATASICENCE.map(
            (course: Course): string => course.code
        );
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = dataScienceCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkHighPerfConcent(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const highPerfCodes = HIGHPERFORMANCE.map(
            (course: Course): string => course.code
        );
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = highPerfCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkSystemsNetConcent(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const systemCodes = SYSTEMSNETWORK.map(
            (course: Course): string => course.code
        );
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = systemCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function checkTheoryConcent(classes: Course[]) {
        //an array of the codes of all the core requirements in the data file
        const theoryCodes = THEORYANDCOMP.map(
            (course: Course): string => course.code
        );
        const classesCodes = classes.map(
            (course: Course): string => course.code
        );

        //this will find all the missing courses
        //will filter through the input classes and test to see which course codes aren't included in coreCodes
        //findMissingCourses: an array of all the courses not in the input classes
        const findMissingCourses = theoryCodes.filter(
            (course: string): boolean => !classesCodes.includes(course)
        );
        //now, we need to add each find missing course to missingrequirements
        const missingCourses = findMissingCourses.map(
            (course: string): string => course
        );

        missingRequirements = missingRequirements.concat(missingCourses);
    }

    function doNothing() {
        const hello = "hello";
        console.log(hello);
    }

    function checkAllReqs(classes: Course[]) {
        checkBreadths(classes);
        checkMultiCultural(classes);
        checkDLE(classes);
        checkCapstone(classes);
        checkMath(classes);
        checkEngl(classes);
        checkCoreCourses(classes);
        checkTechElect(classes);
        checkScienceSeq(classes);
        addCredits(classes);

        if (concentrat === "Artificial Intelligence and Robotics") {
            checkAIConcent(classes);
        } else if (concentrat === "Bioinformatics") {
            checkbioInfConcentrat(classes);
        } else if (concentrat === "Cybersecurity") {
            checkCyberSecConcent(classes);
        } else if (concentrat === "Data Science") {
            checkDataScienceConcent(classes);
        } else if (concentrat === "High Performance Computing") {
            checkHighPerfConcent(classes);
        } else if (concentrat === "Systems and Networks") {
            checkSystemsNetConcent(classes);
        } else if (concentrat === "Theory and Computation") {
            checkTheoryConcent(classes);
        }
    }

    checkAllReqs(courses);
    return (
        <div className="boxed">
            <Form.Group controlId="selectedConcentrat">
                <Form.Label>Select your Concentration</Form.Label>
                <Form.Select value={concentrat} onChange={updateConcentrat}>
                    <option
                        key="Concentrat1"
                        value="Artificial Intelligence and Robotics"
                    >
                        Artificial Intelligence and Robotics
                    </option>
                    <option key="Concentrat2" value="Bioinformatics">
                        Bioinformatics
                    </option>
                    <option key="Concentrat3" value="Cybersecurity">
                        CyberSecurity
                    </option>
                    <option key="Concentrat4" value="Data Science">
                        Data Science
                    </option>
                    <option
                        key="Concentrat5"
                        value="High Performance Computing"
                    >
                        High Performance Computing
                    </option>
                    <option key="Concentrat6" value="Systems and Networks">
                        Systems and Networks
                    </option>
                    <option key="Concentrat7" value="Theory and Computation">
                        Theory and Computation
                    </option>
                </Form.Select>
            </Form.Group>
            <h6>You have selected: {concentrat}</h6>
            <h3>Missing Requirements</h3>
            {missingRequirements.map((req: string) => (
                <div key={req}>{req}</div>
            ))}
        </div>
    );
}
