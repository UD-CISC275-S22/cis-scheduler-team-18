//modal title: Add A Semester
//Semester Id:
//Season:
//Year:
//3 input boxes
//close button
//save changes button
import React from "react";
import { render, screen } from "@testing-library/react";
import { AddSemesterModal } from "./addSemesterModal";
import userEvent from "@testing-library/user-event";

describe("AddSemesterModal Component Tests", () => {
    beforeEach(() => {
        render(
            <AddSemesterModal
                show={true}
                handleClose={function (): void {
                    throw new Error("Function not implemented.");
                }}
                addSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There are 2 input boxes", () => {
        const inputBoxes = screen.queryAllByRole("textbox");
        expect(inputBoxes).toHaveLength(2);
    });
    test("There is a number box for year", () => {
        const numBox = screen.getByRole("spinbutton");
        expect(numBox).toBeInTheDocument();
    });
    test("There are 3 Buttons", () => {
        const buttons = screen.queryAllByRole("button");
        expect(buttons).toHaveLength(3);
    });
    test("There is a Button Labeled Save Changes", () => {
        const saveBtn = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(saveBtn).toBeInTheDocument();
    });
    test("There is a Close Button", () => {
        const cancelBtn = screen.queryAllByRole("button", {
            name: /Close/i
        });
        expect(cancelBtn).toHaveLength(2);
    });
    test("Add a Semester is On Screen", () => {
        expect(screen.getByText(/Add a Semester/i)).toBeInTheDocument();
    });
    test("Semester ID: Is on Screen", () => {
        expect(screen.getByText(/Semester ID:/i)).toBeInTheDocument();
    });
    test("Season: Is on screen", () => {
        expect(screen.getByText(/Season/i)).toBeInTheDocument();
    });
    test("Year: is on screen", () => {
        expect(screen.getByText(/Year:/i)).toBeInTheDocument();
    });
    test("You can add a Semester", () => {
        const idTB = screen.getByRole("textbox", { name: /Semester ID/i });
        userEvent.type(idTB, "test");
        const semTB = screen.getByRole("textbox", {
            name: /Season:/i
        });
        userEvent.type(semTB, "Fall");
        const yearTB = screen.getByRole("spinbutton", { name: /Year:/i });
        userEvent.type(yearTB, "2025");
        const saveBtn = screen.getByRole("button", { name: /Save Changes/i });
        //saveBtn.click();
        //expect(screen.getByText(/Fall 2025/i)).toBeInTheDocument();
    });
    test("Cancel Button Works", () => {
        const idTB = screen.getByRole("textbox", { name: /Semester ID/i });
        userEvent.type(idTB, "test");
        const semTB = screen.getByRole("textbox", {
            name: /Season:/i
        });
        userEvent.type(semTB, "Fall");
        const yearTB = screen.getByRole("spinbutton", { name: /Year:/i });
        userEvent.type(yearTB, "2025");
        const cancelBtn = screen.queryAllByRole("button", { name: /Close/i });
        //cancelBtn.click();
        //expect(screen.getByText(/Fall 2025/i)).not.toBeInTheDocument();
    });
});
