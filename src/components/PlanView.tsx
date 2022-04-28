import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { Semesterer } from "../semesterer";
import { CheckDegreeReq } from "./CheckDegreeReqs";
import { PlanEditor } from "./PlanEditor";
import { Semester } from "../interfaces/semester";

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
    deletePlan,
    updateEditedSem
}: {
    plan: Plan;
    editPlan: (id: string, newPlan: Plan) => void;
    deletePlan: (id: string) => void;
    updateEditedSem: (planId: string, semesters: Semester[]) => void;
}): JSX.Element {
    //determines whether we're in editing mode for semesters
    const [editing, setEditing] = useState<boolean>(false);

    //will update the usestate editing
    function changePlanEditing() {
        setEditing(!editing);
    }

    function updatePlan(plan: Plan, sem: Semester) {
        plan.semesters = [...plan.semesters, sem];
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
                <Semesterer
                    plan={plan}
                    updateEditedSem={updateEditedSem}
                ></Semesterer>
            </div>
            <div>
                <Button variant="info" onClick={changePlanEditing}>
                    Edit Plan
                </Button>
            </div>
            <div>
                <CheckDegreeReq plan={plan}></CheckDegreeReq>
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
