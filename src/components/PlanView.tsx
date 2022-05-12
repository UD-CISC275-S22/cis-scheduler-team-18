import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { Semesterer } from "../semesterer";
import { CheckDegreeReq } from "./CheckDegreeReqs";
import { PlanEditor } from "./PlanEditor";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";
import "../styleSheets/plan.css";

export function PlanView({
    plan,
    editPlan,
    deletePlan,
    plans,
    setPlans
}: {
    plan: Plan;
    editPlan: (id: string, newPlan: Plan) => void;
    deletePlan: (id: string) => void;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
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
                <Semesterer
                    plan={plan}
                    plans={plans}
                    setPlans={setPlans}
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
