//semesterer:
//calls semesterList
//Clear All Semesters button
//Add Semester Button
import React from "react";
import { render, screen } from "@testing-library/react";
import { Semesterer } from "../src/semesterer";
import semesterPlan from "./data/semesterPlan.json";
import { Plan } from "./interfaces/plan";

const plan = semesterPlan[0];
const plans = semesterPlan.map((plan: Plan): Plan => plan);

describe("Semesterer Component Tests", () => {
    beforeEach(() => {
        render(
            <Semesterer
                plan={plan}
                plans={plans}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setData={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is a Clear All Sems Button", () => {
        const clearSemsBtn = screen.getByRole("button", {
            name: /Clear All Semesters/i
        });
        expect(clearSemsBtn).toBeInTheDocument();
    });
    test("There is an Add Semester Button", () => {
        const addSemBtn = screen.getByRole("button", { name: /Add Semester/i });
        expect(addSemBtn).toBeInTheDocument();
    });
});
