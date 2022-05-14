import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { Plan } from "../interfaces/plan";

export function PlanEditor({
    changePlanEditing,
    plan,
    editPlan,
    deletePlan
}: {
    changePlanEditing: () => void;
    plan: Plan;
    editPlan: (id: string, newPlan: Plan) => void;
    deletePlan: (id: string) => void;
}): JSX.Element {
    const [name, setName] = useState<string>(plan.name);

    //will save changed made
    function save() {
        editPlan(plan.id, {
            ...plan,
            name: name
        });
        changePlanEditing();
    }

    //will cancel the changes being made
    function cancel() {
        changePlanEditing();
    }

    return (
        <Container>
            <Row>
                <Col>
                    {/* Name */}
                    <Form.Group controlId="formPlanName" as={Row}>
                        <Form.Label column sm={2}>
                            Degree Plan Name:
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
                    {/* Save/Cancel */}
                    <Button onClick={save} variant="success" className="me-4">
                        Save
                    </Button>
                    <Button onClick={cancel} variant="warning" className="me-5">
                        Cancel
                    </Button>
                    {/* Delete */}
                    <Button
                        onClick={() => deletePlan(plan.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete Plan
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
