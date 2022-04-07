import React from "react";
import { Plan } from "./Plan";
import { Stack } from "react-bootstrap";
//import { PlanView } from "./PlanView";

export function PlanList({ plans }: { plans: Plan[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {plans.map((plan: Plan) => (
                <div key={plan.id} className="bg-light border m-2 p-2">
                    <div>PlanView Goes Here</div>
                </div>
            ))}
        </Stack>
    );
}
