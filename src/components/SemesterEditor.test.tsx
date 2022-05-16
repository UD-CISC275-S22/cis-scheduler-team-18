//semesterEditor: modal
//two textboxes
//save button
//cancel button
//delete button
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterEditor } from "./semesterEditor";
import semesterPlan from "../data/semesterPlan.json";

const plan = semesterPlan[0];
const semester = plan.semesters[0];

describe("SemesterEditor Component Tests", () => {
    beforeEach(() => {
        render(
            <SemesterEditor
                show={true}
                changeSemesterEditing={function (): void {
                    throw new Error("Function not implemented.");
                }}
                semester={semester}
                editSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
                deleteSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is one input boxes", () => {
        const inputBoxes = screen.queryAllByRole("textbox");
        expect(inputBoxes).toHaveLength(1);
    });
    /*test("There is one number inputbox", () => {
        const numBox = screen.queryAllByRole("spinbox");
        expect(numBox).toBeInTheDocument();
    });*/
    test("There are 4 buttons.", () => {
        const buttons = screen.queryAllByRole("button");
        expect(buttons).toHaveLength(4);
    });
    test("There is a button labeled Save", () => {
        const SaveButton = screen.getByRole("button", {
            name: /Save/i
        });
        expect(SaveButton).toBeInTheDocument();
    });
    test("There is a Cancel Button", () => {
        const CancelButton = screen.getByRole("button", {
            name: /Cancel/i
        });
        expect(CancelButton).toBeInTheDocument();
    });
    test("There is a delete Semester Button", () => {
        const DeleteSemBtn = screen.getByRole("button", {
            name: /Delete Semester/i
        });
        expect(DeleteSemBtn).toBeInTheDocument();
    });
    test("Edit A Semester is On Screen", () => {
        expect(screen.getByText(/Edit a Semester/i)).toBeInTheDocument();
    });
    test("Semster Season is on Screen", () => {
        expect(screen.getByText(/Semester Season/i)).toBeInTheDocument();
    });
    test("Semester Year is on Screen", () => {
        expect(screen.getByText(/Semester Year/i)).toBeInTheDocument();
    });
    //figure out how to test if cancel, delete semester, and save work
});
