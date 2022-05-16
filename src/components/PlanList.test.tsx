import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanList } from "./PlanList";
import semesterPlan from "../data/semesterPlan.json";

describe("PlanList Component tests", () => {
    beforeEach(() => {
        render(
            <PlanList
                plans={semesterPlan}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                deletePlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
                editPlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setData={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is a stack of plans", () => {
        expect(screen.getByTestId("PlanListTest")).toBeInTheDocument();
    });
});
