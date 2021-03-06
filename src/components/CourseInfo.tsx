import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
import coreReqs from "../data/coreMajorRequirements.json";
import techReqs from "../data/techElect.json";
import scienceReq from "../data/scienceRequriement.json";
import multiCultReq from "../data/multiCulturalReq.json";
import DLEReq from "../data/DLEReq.json";
import ai from "../data/ai.json";
import bioInformatics from "../data/bioinformatics.json";
import cybersecurity from "../data/cybersecurity.json";
import dataScience from "../data/dataScience.json";
import highPerformance from "../data/highPerf.json";
import systemsNetwork from "../data/systemNetworks.json";
import theoryandComp from "../data/TheoryandComputation.json";
/**
 * Displays a popup which lists all course information not seen on main page
 */
export function CourseInfo({ course }: { course: Course }): JSX.Element {
    const [show, setShow] = useState(false);

    //for opening/closing popup
    const close = () => setShow(false);
    const open = () => setShow(true);

    //prints degree requirements this coure fufills
    function degreeReq(): string {
        //formatting course code
        const codeArr = Array.from(course.code);
        const letterCodeArr = codeArr.filter(
            (str: string): boolean => isNaN(parseInt(str)) && str !== " "
        );
        const numCodeArr = codeArr.filter(
            (str: string): boolean => !isNaN(parseInt(str))
        );
        const letterCode = letterCodeArr.join("").toUpperCase();
        const numCode = numCodeArr.join("");
        const realCode = letterCode + " " + numCode;
        let requirements = "";
        //core requirements: an array of Course Objects that are the coreReqs -- THESE NEED TO BE TAKEN
        const CORES = coreReqs.map((course: Course): string => course.code);
        if (CORES.includes(realCode)) {
            requirements = "CS Core Course";
        }
        //DLEReqs: an array of Course Objects that are DLE options -- ANY OF THESE CAN BE TAKEN (3 credits)
        const DLE = DLEReq.map((course: Course): string => course.code);
        if (DLE.includes(realCode)) {
            requirements = requirements + "\nDiscovery Learning Experience";
        }
        //multiculturalREQ: ONE of these classes need to be taken (3 credits)
        const MULTICULTURAL = multiCultReq.map(
            (course: Course): string => course.code
        );
        if (MULTICULTURAL.includes(realCode)) {
            requirements = requirements + "\nMulticultural";
        }
        //science requirement: a sequence is needed + additional (12 credits in total)
        const SCIENCE = scienceReq.map((course: Course): string => course.code);
        if (SCIENCE.includes(realCode)) {
            requirements = requirements + "\nLab Science";
        }
        //techElect: 6 credits any 2 of these
        const TECHELECT = techReqs.map((course: Course): string => course.code);
        if (TECHELECT.includes(realCode)) {
            requirements = requirements + "\nTech Elective";
        }
        //ai concentration
        const AI = ai.map((course: Course): string => course.code);
        if (AI.includes(realCode)) {
            requirements = requirements + "\nAI Concentration Course";
        }
        //bioInform concentrat
        const BIOINFORMATICS = bioInformatics.map(
            (course: Course): string => course.code
        );
        if (BIOINFORMATICS.includes(realCode)) {
            requirements =
                requirements + "\nBioinformatics Concentration Course";
        }
        //cyberSecurity concentrat
        const CYBERSECURITY = cybersecurity.map(
            (course: Course): string => course.code
        );
        if (CYBERSECURITY.includes(realCode)) {
            requirements =
                requirements + "\nCybersecurity Concentration Course";
        }
        //dataScience
        const DATASICENCE = dataScience.map(
            (course: Course): string => course.code
        );
        if (DATASICENCE.includes(realCode)) {
            requirements = requirements + "\nData Science Concentration Course";
        }
        //highPerformance
        const HIGHPERFORMANCE = highPerformance.map(
            (course: Course): string => course.code
        );
        if (HIGHPERFORMANCE.includes(realCode)) {
            requirements =
                requirements +
                "\nHigh Performance Computing Concentration Course";
        }
        //systemsNetwork
        const SYSTEMSNETWORK = systemsNetwork.map(
            (course: Course): string => course.code
        );
        if (SYSTEMSNETWORK.includes(realCode)) {
            requirements =
                requirements + "\nSystems Network Concentration Course";
        }
        //theoryandComp
        const THEORYANDCOMP = theoryandComp.map(
            (course: Course): string => course.code
        );
        if (THEORYANDCOMP.includes(realCode)) {
            requirements =
                requirements + "\nTheory and Computation Concentration Course";
        }
        return requirements;
    }
    return (
        <>
            <Button variant="secondary" onClick={open}>
                Course Info
            </Button>

            <Modal show={show} onHide={close} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Course Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <div>
                            Course Code: <span>{course.code}</span>
                        </div>
                        <div>
                            Course Title: <span>{course.name}</span>
                        </div>
                        <div>
                            Credits: <span>{course.credits}</span>
                        </div>

                        <div>
                            {course.preReq.length > 0
                                ? "Prerequisite For:" + course.preReq
                                : "Not a prerequisite for any courses"}
                        </div>

                        <div>
                            Course Description: <span>{course.descr}</span>
                        </div>
                        <div>
                            Course Offered: <span>{course.typ}</span>
                        </div>
                        <div>
                            Breadth Group: <span>{course.breadth}</span>{" "}
                        </div>
                        <div>Fulfills Requirements: {degreeReq()}</div>
                        <div>
                            Restrictions: <span>{course.restrict}</span>
                        </div>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
