import React, { useState } from "react";
import { Button, Row, Col, Form, Modal } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { Plan } from "../interfaces/plan";
//change semester to plan

export function SemesterEditor({
    plan,
    plans,
    setPlans,
    show,
    changeSemesterEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    plan: Plan;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
    show: boolean;
    changeSemesterEditing: () => void;
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    //need useStates for each field that can be changed
    const [season, setSeason] = useState<string>(semester.season);
    const [year, setYear] = useState<string>(semester.year.toString());
    //const [show, setShow] = useState<boolean>(false);

    //will save the changes made
    function save() {
        editSemester(semester.id, {
            ...semester,
            season: season,
            year: parseInt(year) || 0
        });
        changeSemesterEditing();
        //updateEditedSemester(planId, semester.id, season, parseInt(year) || 0);
        //updatePlans(plan, semester, season, parseInt(year) || 0);
    }

    //will cancel the changes being made
    function cancel() {
        changeSemesterEditing();
    }

    return (
        <Modal show={show} onHide={changeSemesterEditing} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Edit a Semester</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*Season*/}
                <Form.Group controlId="formSemesterSeason" as={Row}>
                    <Form.Label column sm={3}>
                        Semester Season:
                    </Form.Label>
                    <Col>
                        <Form.Control
                            value={season}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setSeason(event.target.value)}
                        ></Form.Control>
                    </Col>
                </Form.Group>
                {/*Year*/}
                <Form.Group controlId="formSemesterYear" as={Row}>
                    <Form.Label column sm={2}>
                        Semester Year:
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
                {/*Save*/}
                <Button variant="success" onClick={save} className="me-4">
                    Save
                </Button>
                {/*Cancel*/}
                <Button variant="warning" onClick={cancel} className="me-5">
                    Cancel
                </Button>
                {/*Delete*/}
                <Button
                    onClick={() => deleteSemester(semester.id)}
                    variant="danger"
                    className="me-8"
                >
                    Delete Semester
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
