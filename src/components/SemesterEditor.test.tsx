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
    test("There are two input boxes", () => {
        const inputBoxes = screen.queryAllByRole("textbox");
        expect(inputBoxes).toHaveLength(2);
    });
    test("There are 3 buttons.", () => {
        const buttons = screen.queryAllByRole("button");
        expect(buttons).toHaveLength(4);
    });
    test("There is a button labeled Save", () => {
        const SaveButton = screen.queryAllByRole("button", {
            name: /Save/i
        });
        expect(SaveButton).toBeInTheDocument();
    });
    test("There is a Cancel Button", () => {
        const CancelButton = screen.queryAllByRole("button", {
            name: /Cancel/i
        });
        expect(CancelButton).toBeInTheDocument();
    });
    test("There is a delete Semester Button", () => {
        const DeleteSemBtn = screen.queryAllByRole("button", {
            name: /Delete Semester/i
        });
        expect(DeleteSemBtn).toBeInTheDocument();
    });
    test("Edit A Semester is On Screen", () => {
        expect(screen.getByText(/Edit a Semester/)).toBeInTheDocument();
    });
    test("Semster Season is on Screen", () => {
        expect(screen.getByText(/Semester Season/)).toBeInTheDocument();
    });
    test("Semester Year is on Screen", () => {
        expect(screen.getByText(/Semester Year/)).toBeInTheDocument();
    });
    //figure out how to test if cancel, delete semester, and save work
});
