import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
/**
 * Displays a popup which lists all course information not seen on main page
 */
export function CourseInfo({ course }: { course: Course }): JSX.Element {
    const [show, setShow] = useState(false);

    //for opening/closing popup
    const close = () => setShow(false);
    const open = () => setShow(true);
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
                            Course Code: <span>{course.courseName}</span>
                        </div>
                        <div>
                            Course Title: <span>{course.courseTitle}</span>
                        </div>
                        <div>
                            Credits: <span>{course.credits}</span>
                        </div>
                        <div>
                            Required Course?:{" "}
                            <span>{course.required ? "Yes" : "No"}</span>
                        </div>
                        <div>
                            {course.preReq
                                ? "Prerequisite For:" + course.preReqRequired
                                : "Not a prerequisite for any courses"}
                        </div>
                        <div>
                            {course.preReqRequired
                                ? "RESTRICTION must take:" +
                                  course.requiredPreReq
                                : "No prerequisites"}
                        </div>
                        <div>ADD COURSE DESCRIPTION</div>
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
