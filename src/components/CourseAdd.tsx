import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseAdd({
    addCourse
}: {
    addCourse: (newCourse: Course) => void;
}): JSX.Element {
    //use state for each element needed to make a new course
    const [code, setCode] = useState("NEW101");
    const [title, setTitle] = useState("NEW COURSE");
    const [credits, setCredits] = useState("0");
    //const [required, setRequired] = useState(false);
    const [isPreReq, setIsPreReq] = useState("");
    //const [hasPreReq, setHasPreReq] = useState(false);
    const [show, setShow] = useState(false);

    //update functions
    function addCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
    }
    function addTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    function addCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(event.target.value);
    }
    //function addRequired(event: React.ChangeEvent<HTMLInputElement>) {
    //    setRequired(event.target.checked);
    //}
    function addIsPreReq(event: React.ChangeEvent<HTMLInputElement>) {
        setIsPreReq(event.target.value);
    }
    //function addHasPreReq(event: React.ChangeEvent<HTMLInputElement>) {
    //    setHasPreReq(event.target.checked);
    //}
    //this function creates a new Course with the current given information and puts it in the course list
    function makeCourse() {
        const newCourse: Course = {
            code: code,
            name: title,
            descr: "",
            credits: credits,
            preReq: isPreReq,
            restrict: "",
            breadth: "",
            typ: ""
        };
        addCourse(newCourse);
        close();
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
                    {/*<Form.Check
                        type="checkbox"
                        id="is-required-check"
                        label="Required Course?"
                        checked={required}
                        onChange={addRequired}
    />*/}
                    {/*<Form.Check
                        type="checkbox"
                        id="is-preReq"
                        label="Is this course a pre req?"
                        checked={isPreReq}
                        onChange={addIsPreReq}
                    />
                    <Form.Check
                        type="checkbox"
                        id="has-preReq"
                        label="Does this course have a pre req?"
                        checked={hasPreReq}
                        onChange={addHasPreReq}
/>*/}
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
