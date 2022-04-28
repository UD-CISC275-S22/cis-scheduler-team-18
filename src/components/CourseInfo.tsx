import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
import coreReqs from "../data/coreMajorRequirements.json";
import techReqs from "../data/techElect.json";
import scienceReq from "../data/scienceRequirement.json";
import multiCultReq from "../data/multiCulturalReq.json";
import DLEReq from "../data/DLEReq.json";
import ai from "../data/ai.json";
import bioInformatics from "../data/bioinformatics.json";
import cybersecurity from "../data/cybersecurity.json";
import dataScience from "../data/dataScience.json";
import highPerformance from "../data/highPerf.json";
import systemsNetwork from "../data/systemsNetworks.json";
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
        const SCIENCE = scienceReq.map(
            (course: Course): Course => ({ ...course })
        );
        //techElect: 6 credits any 2 of these
        const TECHELECT = techReqs.map(
            (course: Course): Course => ({ ...course })
        );
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
        return "hello";
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
                        <div>
                            Restrictions: <span>{course.restrict}</span>
                        </div>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
