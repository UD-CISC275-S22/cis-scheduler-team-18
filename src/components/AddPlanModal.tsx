import React, { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Plan } from "../interfaces/plan";
import { Semester } from "../interfaces/semester";

export function AddPlanModal({
    show,
    handleClose,
    addPlan
}: {
    show: boolean;
    handleClose: () => void;
    addPlan: (newPlan: Plan) => void;
}) {
    const [id, setId] = useState<string>("");
    const [name, setName] = useState<string>("");
    const semesters = [""];

    const courses = [""];

    //creates a new plan
    function saveChanges() {
        addPlan({
            id: id,
            name: name,
            semesters: semesters.map(
                (): Semester => ({
                    id: "filler Sem",
                    season: "Summer",
                    year: 2020,
                    courses: courses.map(
                        (): Course => ({
                            code: "filler Course",
                            name: "Example Course Title",
                            descr: "",
                            credits: "0",
                            preReq: "",
                            restrict: "",
                            breadth: "",
                            typ: ""
                        })
                    )
                })
            )
        });
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Plan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* ID */}
                <Form.Group controlId="formQuizId" as={Row}>
                    <Form.Label column sm={5}>
                        ID of New Plan:
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
                {/* Name */}
                <Form.Group controlId="formQuizTitle" as={Row}>
                    <Form.Label column sm={5}>
                        Name of New Plan:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Col>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
