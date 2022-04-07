import React from "react";
import { Stack } from "react-bootstrap";
import { Plan } from "./interfaces/Plan";
//import { PlanView } from "./PlanView";

export function PlanList({ plans }: { plans: Plan[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {" "}
            <div>{plans}</div>
        </Stack>
    );
}
