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
