import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseEdit({ course }: { course: Course }): JSX.Element {
    const [code, setCode] = useState<string>(course.courseName);
    const [title, setTitle] = useState<string>(course.courseTitle);
    const [credits, setCredits] = useState<number>(course.credits);
    const [show, setShow] = useState(false);

    const close = () => setShow(false);
    const open = () => setShow(true);
    function changeCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
    }
    function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    function changeCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(parseInt(event.target.value));
    }
    return (
        <>
            <div>
                <Button onClick={open}> Edit Course</Button>
            </div>
            <Modal show={show} onHide={close} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formCode">
                        <Form.Label>Change Course Code:</Form.Label>
                        <Form.Control
                            value={code}
                            onChange={changeCode}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Change Course Title:</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={changeTitle}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Change Course Title:</Form.Label>
                        <Form.Control
                            type="number"
                            value={credits}
                            onChange={changeCredits}
                        ></Form.Control>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={close}>
                            Close
                        </Button>
                        <Button variant="success">Save Changes</Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
}
