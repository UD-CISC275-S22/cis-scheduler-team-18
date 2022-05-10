import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
import catalog from "../data/catalog.json";
//import { Semester } from "../interfaces/semester";

export function CourseAdd({
    addCourse,
    updateCoursePlan,
    planId,
    semesterId
}: {
    addCourse: (newCourse: Course) => void;
    updateCoursePlan: (
        planId: string,
        semesterId: string,
        newCourse: Course
    ) => void;
    planId: string;
    semesterId: string;
}): JSX.Element {
    //use state for each element needed to make a new course
    const [code, setCode] = useState("NEW101");
    const [title, setTitle] = useState("NEW COURSE");
    const [credits, setCredits] = useState("0");
    const [isPreReq, setIsPreReq] = useState("");
    const [show, setShow] = useState(false);

    //update functions
    function addCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
        const found = findCourse(code);
        if (found !== undefined) {
            setTitle(found.name);
            setCredits(found.credits);
            setIsPreReq(found.preReq);
        }
    }
    function addTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    function addCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(event.target.value);
    }
    function addIsPreReq(event: React.ChangeEvent<HTMLInputElement>) {
        setIsPreReq(event.target.value);
    }
    //this function creates a new Course with the current given information and puts it in the course list
    function makeCourse() {
        let newCourse: Course;
        const found = findCourse(code);
        if (found !== undefined) {
            newCourse = {
                code: found.code,
                name: found.name,
                descr: found.descr,
                credits: found.credits,
                preReq: found.preReq,
                restrict: found.restrict,
                breadth: found.breadth,
                typ: found.typ
            };
        } else {
            newCourse = {
                code: code,
                name: title,
                descr: "",
                credits: credits,
                preReq: isPreReq,
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        addCourse(newCourse);
        updateCoursePlan(planId, semesterId, newCourse);
        close();
    }
    //gets course information from catalog based on a course id
    function findCourse(id: string) {
        const codeArr = Array.from(id);
        const letterCodeArr = codeArr.filter(
            (str: string): boolean => isNaN(parseInt(str)) && str !== " "
        );
        const numCodeArr = codeArr.filter(
            (str: string): boolean => !isNaN(parseInt(str))
        );
        const letterCode = letterCodeArr.join("").toUpperCase();
        const numCode = numCodeArr.join("");
        const realCode = letterCode + " " + numCode;
        const log = JSON.parse(JSON.stringify(catalog));
        const poss: Course = log[letterCode][realCode];
        const found: Course = {
            code: poss.code,
            name: poss.name,
            descr: poss.descr,
            credits: poss.credits,
            preReq: poss.preReq,
            restrict: poss.restrict,
            breadth: poss.breadth,
            typ: poss.typ
        };
        return found;

        /*
        const codeArr = Array.from(id);
        const letterCodeArr = codeArr.filter(
            (str: string): boolean => isNaN(parseInt(str)) && str !== " "
        );
        const numCodeArr = codeArr.filter(
            (str: string): boolean => !isNaN(parseInt(str))
        );
        const letterCode = letterCodeArr.join("").toUpperCase();
        const numCode = numCodeArr.join("");
        const realCode = letterCode + numCode;
        const log = JSON.parse(JSON.stringify(catalog));
        const found: Course[] = log.filter((course: Course): boolean =>
            course.code.includes(realCode)
        );
        return found[0];
        */
    }
    //for Modal
    const close = () => setShow(false);
    const open = () => setShow(true);

    /**
     * Displays a button that when clicked has multiple textboxes/checkboxes that the user can use to make a new course
     */
    return (
        <>
            <div>
                <Button variant="success" onClick={open}>
                    Add New Course
                </Button>
            </div>
            <Modal show={show} onHide={close} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>Add New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formCode">
                        <Form.Label>Course Code:</Form.Label>
                        <Form.Control
                            value={code}
                            onChange={addCode}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Course Title:</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={addTitle}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCredits">
                        <Form.Label>Credits:</Form.Label>
                        <Form.Control
                            value={credits}
                            onChange={addCredits}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formPreReq">
                        <Form.Label>PreReq To: </Form.Label>
                        <Form.Control
                            value={isPreReq}
                            onChange={addIsPreReq}
                        ></Form.Control>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="warning" onClick={close}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={makeCourse}>
                            Add New Course
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
}
