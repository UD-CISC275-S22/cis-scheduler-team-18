import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";
import catalog from "../data/catalog.json";

export function CourseAdd({
    addCourse
}: {
    addCourse: (newCourse: Course) => void;
}): JSX.Element {
    //use state for each element needed to make a new course
    const [code, setCode] = useState("NEW101");
    const [title, setTitle] = useState("NEW COURSE");
    const [credits, setCredits] = useState("0");
    const [show, setShow] = useState(false);
    const [codeExists, setCodeExists] = useState(false);
    const [titleExists, setTitleExists] = useState(false);
    const [creditsExists, setCreditsExists] = useState(false);

    //update functions
    function addCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
        setCodeExists(false);
        const found = findCourse(event.target.value);
        if (found !== undefined) {
            setCodeExists(true);
            setTitle(found.name);
            setCredits(found.credits);
            setTitleExists(true);
            setCreditsExists(true);
        } else {
            setCodeExists(false);
        }
    }
    function addTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
        const found = findCourse(code);
        if (found.name !== event.target.value) {
            setTitleExists(false);
        } else {
            setTitleExists(true);
        }
    }
    function addCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(event.target.value);
        const found = findCourse(code);
        if (found.credits !== event.target.value) {
            setCreditsExists(false);
        } else {
            setCreditsExists(true);
        }
    }
    //this function creates a new Course with the current given information and puts it in the course list
    function makeCourse() {
        let newCourse: Course;
        const found = findCourse(code);
        if (found !== undefined) {
            newCourse = {
                code: found.code,
                name: title,
                descr: found.descr,
                credits: credits,
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
                preReq: "",
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        addCourse(newCourse);
        close();
    }
    function printWarnings(): string {
        if (!codeExists) {
            return "Warning: Course does not exist in course catalog";
        } else {
            if (creditsExists && titleExists) {
                return "";
            } else {
                let warnings = "Warning: ";
                if (!titleExists) {
                    warnings =
                        warnings +
                        "Course title does not match title for this course in the catalog";
                }
                if (!creditsExists) {
                    warnings =
                        warnings +
                        "\nNumber of credits do not match the number of credits for this course in the catalog";
                }
                return warnings;
            }
        }
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
                    <div style={{ color: "red" }}>{printWarnings()}</div>
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
