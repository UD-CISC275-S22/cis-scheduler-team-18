//semesterEditor: modal
//two textboxes
//save button
//cancel button
//delete button
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterEditor } from "./semesterEditor";
import semesterPlan from "../data/semesterPlan.json";
import userEvent from "@testing-library/user-event";

const plan = semesterPlan[0];
const semester = plan.semesters[0];

test("There is one input Box", () => {
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
    const inputBox = screen.getByRole("textbox");
    expect(inputBox).toBeInTheDocument();
});
test("There is one number Box", () => {
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
    const numBox = screen.getByRole("spinbutton");
    expect(numBox).toBeInTheDocument();
});
test("There are 4 Buttons", () => {
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
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(4);
});
test("There is a button labeled Save", () => {
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
    const saveButton = screen.getByRole("button", { name: /Save/i });
    expect(saveButton).toBeInTheDocument();
});
test("There is a Cancel Button", () => {
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
    const cancelButton = screen.getByRole("button", { name: /Cancel/i });
    expect(cancelButton).toBeInTheDocument();
});
test("There is a Delete Semester Button", () => {
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
    const deleteSem = screen.getByRole("button", { name: /Delete Semester/i });
    expect(deleteSem).toBeInTheDocument();
});
test("Edit a semester is on Screen", () => {
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
    expect(screen.getByText(/Edit a Semester/i)).toBeInTheDocument();
});
test("Semester Season is on Screen", () => {
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
    expect(screen.getByText(/Semester Season/i)).toBeInTheDocument();
});
test("Semester Year is on Screen", () => {
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
    expect(screen.getByText(/Semester Year/i)).toBeInTheDocument();
});
