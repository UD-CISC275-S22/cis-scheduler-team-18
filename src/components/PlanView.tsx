import React from "react";
import { useState } from "react";
//import { Container, Row, Col } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import { Semesterer } from "../semesterer";
//import { PlanEditor } from "./PlanEditor";

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
            editPlan={editPlan
            deletePlan={deletePlan}
        ></PlanEditor>
    ) : (

*/

export function PlanView({ plan }: { plan: Plan }): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <div>PlanEditor will go here!!!! {changeEditing}</div>
    ) : (
        <div>
            <div>
                <h3>{plan.name}</h3>
            </div>
            {/*<div>
                <MultipleSemesterTable plan={plan}></MultipleSemesterTable>{" "}
    </div>*/}
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
