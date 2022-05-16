import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanView } from "./PlanView";
import semesterPlan from "../data/semesterPlan.json";

const plan = semesterPlan[0];

describe("PlanView Component tests", () => {
    beforeEach(() => {
        render(
            <PlanView
                plan={plan}
                editPlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
                deletePlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plans={semesterPlan}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setData={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is a button labeled Edit Plan", () => {
        const myEditPlanButton = screen.getByRole("button", {
            name: /Edit Plan/i
        });
        expect(myEditPlanButton).toBeInTheDocument();
    });
    test("The degree plan's name is on the screen", () => {
        const testPlanName = plan.name;
        expect(screen.getByText(testPlanName)).toBeInTheDocument();
    });
});
