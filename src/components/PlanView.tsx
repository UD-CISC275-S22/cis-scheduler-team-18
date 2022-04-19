import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { Semesterer } from "../semesterer";
import { PlanEditor } from "./PlanEditor";

/*
Add this later!
export function PlanView({
    plan,
    deletePlan,
    editPlan
}: {
    plan: Plan;
    deletePlan: (id: string) => void;
    editPlan: (id: string, newPlan: Plan) => void;
}): JSX.Element {
    ...
    return editing ? (
        <PlanEditor
            changeEditing={changeEditing}
            plan={plan}
            editPlan={editPlan}
            deletePlan={deletePlan}
        ></PlanEditor>
    ) : (
*/

export function PlanView({
    plan,
    editPlan,
    deletePlan
}: {
    plan: Plan;
    editPlan: (id: string, newPlan: Plan) => void;
    deletePlan: (id: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changePlanEditing() {
        setEditing(!editing);
    }

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
                <Semesterer plan={plan}></Semesterer>
            </div>
            <div>
                <Button variant="info" onClick={changePlanEditing}>
                    Edit Plan
                </Button>
            </div>
        </div>
    );
}

/*
return editing ? (
        <div>PlanEditor will go here!!!! {changeEditing}</div>
    ) : (
        <div>
            <div>
                {" "}
                <h3>{plan.name}</h3>{" "}
            </div>
            <Container>
                <Row>
                    <Col>
                        <MultipleSemesterTable
                            plan={plan}
                        ></MultipleSemesterTable>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
*/
