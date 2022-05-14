import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import coreReqs from "../data/CoreMajorRequirements.json";
import techReqs from "../data/TechElect.json";
import scienceReq from "../data/ScienceRequirement.json";
import multiCultReq from "../data/MultiCulturalReq.json";
import DLEReq from "../data/DLEReq.json";
import ai from "../data/Ai.json";
import bioInformatics from "../data/Bioinformatics.json";
import cybersecurity from "../data/Cybersecurity.json";
import dataScience from "../data/DataScience.json";
import highPerformance from "../data/HighPerf.json";
import systemsNetwork from "../data/SystemsNetworks.json";
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
        let requirements = "";
        //core requirements: an array of Course Objects that are the coreReqs -- THESE NEED TO BE TAKEN
        const CORES = coreReqs.map((course: Course): string => course.code);
        if (CORES.includes(course.code)) {
            requirements = "CS Core Course";
        }
        //DLEReqs: an array of Course Objects that are DLE options -- ANY OF THESE CAN BE TAKEN (3 credits)
        const DLE = DLEReq.map((course: Course): string => course.code);
        if (DLE.includes(course.code)) {
            requirements = requirements + "\nDiscovery Learning Experience";
        }
        //multiculturalREQ: ONE of these classes need to be taken (3 credits)
        const MULTICULTURAL = multiCultReq.map(
            (course: Course): string => course.code
        );
        if (MULTICULTURAL.includes(course.code)) {
            requirements = requirements + "\nMulticultural";
        }
        //science requirement: a sequence is needed + additional (12 credits in total)
        const SCIENCE = scienceReq.map((course: Course): string => course.code);
        if (SCIENCE.includes(course.code)) {
            requirements = requirements + "\nLab Science";
        }
        //techElect: 6 credits any 2 of these
        const TECHELECT = techReqs.map((course: Course): string => course.code);
        if (TECHELECT.includes(course.code)) {
            requirements = requirements + "\nTech Elective";
        }
        //ai concentration
        const AI = ai.map((course: Course): string => course.code);
        if (AI.includes(course.code)) {
            requirements = requirements + "\nAI Concentration Course";
        }
        //bioInform concentrat
        const BIOINFORMATICS = bioInformatics.map(
            (course: Course): string => course.code
        );
        if (BIOINFORMATICS.includes(course.code)) {
            requirements =
                requirements + "\nBioinformatics Concentration Course";
        }
        //cyberSecurity concentrat
        const CYBERSECURITY = cybersecurity.map(
            (course: Course): string => course.code
        );
        if (CYBERSECURITY.includes(course.code)) {
            requirements =
                requirements + "\nCybersecurity Concentration Course";
        }
        //dataScience
        const DATASICENCE = dataScience.map(
            (course: Course): string => course.code
        );
        if (DATASICENCE.includes(course.code)) {
            requirements = requirements + "\nData Science Concentration Course";
        }
        //highPerformance
        const HIGHPERFORMANCE = highPerformance.map(
            (course: Course): string => course.code
        );
        if (HIGHPERFORMANCE.includes(course.code)) {
            requirements =
                requirements +
                "\nHigh Performance Computing Concentration Course";
        }
        //systemsNetwork
        const SYSTEMSNETWORK = systemsNetwork.map(
            (course: Course): string => course.code
        );
        if (SYSTEMSNETWORK.includes(course.code)) {
            requirements =
                requirements + "\nSystems Network Concentration Course";
        }
        //theoryandComp
        const THEORYANDCOMP = theoryandComp.map(
            (course: Course): string => course.code
        );
        if (THEORYANDCOMP.includes(course.code)) {
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
