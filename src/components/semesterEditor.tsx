import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Semester } from "../interfaces/semester";

export function SemesterEditor({
    changeSemesterEditing,
    semester,
    editSemester,
    deleteSemester
}: {
    changeSemesterEditing: () => void;
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    //need useStates for each field that can be changed
    const [season, setSeason] = useState<string>(semester.season);
    const [year, setYear] = useState<string>(semester.year.toString());

    //will save the changes made
    function save() {
        editSemester(semester.id, {
            ...semester,
            season: season
        });
        changeSemesterEditing();
    }

    //will cancel the changes being made
    function cancel() {
        changeSemesterEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/*Year*/}
                    <Form.Group controlId="formSemesterSeason" as={Row}>
                        <Form.Label column sm={2}>
                            Semester Season:
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
                    {/*Year*/}
                    <Form.Group controlId="formSemesterYear" as={Row}>
                        <Form.Label column sm={2}>
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
                    {/*Save/Cancel*/}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
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
                </Col>
            </Row>
        </Container>
    );
}
