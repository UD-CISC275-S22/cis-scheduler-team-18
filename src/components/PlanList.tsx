import React from "react";
import { Stack } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
//import { Semester } from "../interfaces/semester";
//import { Course } from "../interfaces/course";

export function PlanList({
    plans,
    setPlans,
    deletePlan,
    editPlan,
    setData
}: {
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
    deletePlan: (id: string) => void;
    editPlan: (id: string, newPlan: Plan) => void;
    setData: (d: Plan[]) => void;
}): JSX.Element {
    //make sure the plans stay in a nice format
    //calls PlanView which will determine if we're in editing mode
    return (
        <Stack gap={3} data-testid="PlanListTest">
            {plans.map((plan: Plan) => (
                <div key={plan.id} className="bg-light border m-2 p-2">
                    <PlanView
                        plans={plans}
                        setPlans={setPlans}
                        plan={plan}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                        setData={setData}
                    ></PlanView>
                </div>
            ))}
        </Stack>
    );
}
