import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { Semesterer } from "../semesterer";
import { CheckDegreeReq } from "./CheckDegreeReqs";
import { PlanEditor } from "./PlanEditor";
import "../styleSheets/plan.css";
import { Drag } from "./Drag";

export function PlanView({
    plan,
    editPlan,
    deletePlan,
    plans,
    setPlans,
    setData
}: {
    plan: Plan;
    editPlan: (id: string, newPlan: Plan) => void;
    deletePlan: (id: string) => void;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
    setData: (d: Plan[]) => void;
}): JSX.Element {
    //determines whether we're in editing mode for semesters
    const [editing, setEditing] = useState<boolean>(false);

    //will update the usestate editing
    function changePlanEditing() {
        setEditing(!editing);
    }

    //if in editing mode, will PlanEditor
    //else, will call Semesterer
    return editing ? (
        <div>
            <PlanEditor
                changePlanEditing={changePlanEditing}
                plan={plan}
                editPlan={editPlan}
                deletePlan={deletePlan}
            ></PlanEditor>
        </div>
    ) : (
        <div>
            <div>
                <h3>{plan.name}</h3>
            </div>
            <div>
                <Row>
                    <Col xs={8} className="bg-grey border m-2 p-2">
                        <Container>
                            <Semesterer
                                plan={plan}
                                plans={plans}
                                setPlans={setPlans}
                                setData={setData}
                            ></Semesterer>
                        </Container>
                    </Col>
                    <Col xs={3} className="bg-grey border m-2 p-2">
                        <Drag></Drag>
                    </Col>
                </Row>
            </div>
            <div>
                <CheckDegreeReq
                    plan={plan}
                    data-testid="checkDegreeReqTest"
                ></CheckDegreeReq>
            </div>
            <div>
                <Button
                    variant="info"
                    className="m-4"
                    onClick={changePlanEditing}
                >
                    Edit Plan
                </Button>
            </div>
        </div>
    );
}
