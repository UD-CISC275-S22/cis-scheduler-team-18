import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export function AddSemesterModal({
    show,
    handleClose,
    addSemester
}: {
    show: boolean;
    handleClose: () => void;
    addSemester: (newSemester: Semester) => void;
}) {
    const [id, setId] = useState<string>("");
    //const [courses, setCourses] = useState<string[]>([]);
    const [season, setSeason] = useState<string>("");
    const [year, setYear] = useState<string>("");

    const courses = [""];

    function saveChanges() {
        addSemester({
            id: season + " " + year,
            season: season,
            year: parseInt(year) || 0,
            courses: courses.map(
                (): Course => ({
                    id: "Example course",
                    courseName: "Example Course Name",
                    courseTitle: "Example Course Title",
                    credits: 0,
                    required: false,
                    preReq: false,
                    preReqTo: "",
                    preReqRequired: false,
                    requiredPreReq: "",
                    option: false,
                    optionTo: ""
                })
            )
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add a Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*ID*/}
                <Form.Group controlId="formSemesterId" as={Row}>
                    <Form.Label column sm={3}>
                        Semester ID:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={id}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setId(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                {/*Title*/}
                <Form.Group controlId="formSemesterSeason" as={Row}>
                    <Form.Label column sm={3}>
                        Season:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={season}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setSeason(event.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group controlId="formSemesterYear" as={Row}>
                    <Form.Label column sm={3}>
                        Year:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            type="number"
                            value={year}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setYear(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                {/*Close*/}
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                {/*Save*/}
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
