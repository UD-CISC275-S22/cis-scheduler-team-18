//semester season and year
//calls courselist
//....figure this out

import React from "react";
import { render, screen } from "@testing-library/react";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import semesterPlan from "../data/semesterPlan.json";
import { Plan } from "../interfaces/plan";

const plan = semesterPlan[0];
const sem = plan.semesters[0];
const plans = semesterPlan.map((plan: Plan): Plan => plan);

describe("MultipleSemester Component Tests", () => {
    beforeEach(() => {
        render(
            <MultipleSemesterTable
                plan={plan}
                semester={sem}
                plans={plans}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setData={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("Work on this", () => {
        //to do
    });
});
