import React from "react";
import { render, screen } from "@testing-library/react";
import { AddPlanModal } from "./AddPlanModal";

describe("AddPlanModal Component tests", () => {
    beforeEach(() => {
        render(
            <AddPlanModal
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                addPlan={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is are 2 input boxes", () => {
        const inputBoxes = screen.queryAllByRole("textbox");
        expect(inputBoxes).toHaveLength(2);
    });
    test("There are 3 buttons.", () => {
        const myButtons = screen.queryAllByRole("button");
        expect(myButtons).toHaveLength(3);
    });
    test("There is a button labeled Save Changes", () => {
        const changeTypeButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(changeTypeButton).toBeInTheDocument();
    });
    test("There is a button labeled Close", () => {
        const myCloseButtons = screen.getAllByRole("button", {
            name: /Close/i
        });
        expect(myCloseButtons).toHaveLength(2);
    });
    test("'Add New Plan' is on the screen", () => {
        expect(screen.getByText(/Add New Plan/i)).toBeInTheDocument();
    });
    test("'ID of New Plan:' is on the screen", () => {
        expect(screen.getByText(/ID of New Plan:/i)).toBeInTheDocument();
    });
    test("'Name of New Plan:' is on the screen", () => {
        expect(screen.getByText(/Name of New Plan:/i)).toBeInTheDocument();
    });
});
