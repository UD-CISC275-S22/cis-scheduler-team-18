import React from "react";
import { render, screen } from "@testing-library/react";
import { PlanEditor } from "./PlanEditor";
import semesterPlan from "../data/semesterPlan.json";

const plan = semesterPlan[0];

describe("PlanEditor Component tests", () => {
    beforeEach(() => {
        render(
            <PlanEditor
                changePlanEditing={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={plan}
                editPlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
                deletePlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is an input box", () => {
        const inputBox = screen.getByRole("textbox");
        expect(inputBox).toBeInTheDocument();
    });
    test("There are 3 buttons.", () => {
        const myButtons = screen.queryAllByRole("button");
        expect(myButtons).toHaveLength(3);
    });
    test("There is a button labeled Save", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Save/i
        });
        expect(changeTypeButton).toBeInTheDocument();
    });
    test("There is a button labeled Cancel", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Cancel/i
        });
        expect(changeTypeButton).toBeInTheDocument();
    });
    test("There is a button labeled Delete Plan", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Delete Plan/i
        });
        expect(changeTypeButton).toBeInTheDocument();
    });
    test("'Degree Plan Name' is on the screen", () => {
        expect(screen.getByText(/Degree Plan Name:/i)).toBeInTheDocument();
    });
});
