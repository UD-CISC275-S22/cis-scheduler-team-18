import { stringify } from "querystring";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/course";

/**
 * Displays an "Edit Course" button that when clicked will display a popup that allows the user to edit course information
 */
export function CourseEdit({
    course,
    editCourse,
    deleteCourse
}: {
    course: Course;
    editCourse: (id: string, newCourse: Course) => void;
    deleteCourse: (id: string) => void;
}): JSX.Element {
    const [code, setCode] = useState<string>(course.code);
    const [title, setTitle] = useState<string>(course.name);
    const [credits, setCredits] = useState<string>(course.credits);
    const [show, setShow] = useState(false);

    //saves original course information
    const saveDataKey = course.descr;
    const prevData = localStorage.getItem(saveDataKey);
    if (prevData === null) {
        localStorage.setItem(saveDataKey, JSON.stringify(course));
    }

    //Open Close and Save functions for popup
    const close = () => setShow(false);
    const open = () => setShow(true);

    function save() {
        editCourse(course.code, {
            ...course,
            code: code,
            name: title,
            credits: credits
        });
        close();
    }

    //deletes the course
    function remove() {
        deleteCourse(course.code);
        close();
    }

    //reverts course imformation to original

    //functions to call usestate for each variable to be changed in text boxes
    function changeCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
    }
    function changeTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    function changeCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(event.target.value);
    }

    //returns the course information back to its original information
    function revert() {
        const original = localStorage.getItem(course.descr);
        let tempCourse = course;
        if (original !== null) {
            tempCourse = JSON.parse(original);
        }
        setCode(tempCourse.code);
        setTitle(tempCourse.name);
        setCredits(tempCourse.credits);
    }
    return (
        <>
            <div>
                <Button variant="info" onClick={open}>
                    Edit Course
                </Button>
            </div>
            <Modal show={show} onHide={close} backdrop="static" centered>
                <Modal.Header>
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
                    <Form.Group controlId="formCredits">
                        <Form.Label>Change Course Credits:</Form.Label>
                        <Form.Control
                            type="number"
                            value={credits}
                            onChange={changeCredits}
                        ></Form.Control>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="danger" onClick={remove}>
                            Delete Course
                        </Button>
                        <Button onClick={revert}>Revert to original</Button>
                        <Button variant="warning" onClick={close}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={save}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
}
