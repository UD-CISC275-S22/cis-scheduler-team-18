//you can edit semester season + year
//you can delete semester
//you can save changes
//you can cancel (not save changes)
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterEditor } from "./SemesterEditor";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component Tests", () => {
    beforeEach(() =>
        render(
            <SemesterEditor
                planId={"First Plan"}
                show={true}
                changeSemesterEditing={}
                semester={}
                editSemester={}
                deleteSemester={}
                updateEditedSemester={}
            />
        )
    );
    test("There's an Edit Semester Button", () => {
        const editSem = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        expect(editSem).toBeInTheDocument();
    });
    test("There's a Save Changes and Cancel Button", () => {
        const switchButton = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        switchButton.click();
        const seasonBox = screen.getByRole("button", {
            name: /Save Changes/i
        });
        const yearBox = screen.getByRole("button", {
            name: /Cancel/i
        });
        expect(seasonBox).toBeInTheDocument();
        expect(yearBox).toBeInTheDocument();
    });
    test("There's a Delete Button", () => {
        const switchButton = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        switchButton.click();
        const deleteBtn = screen.getByRole("button", {
            name: /Delete Semester/i
        });
        expect(deleteBtn).toBeInTheDocument();
    });
    test("Editing the Semester Season and Year Saves", () => {
        const switchButton = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        switchButton.click();
        const seasonBox = screen.getByRole("textbox");
        userEvent.type(seasonBox, "Fall");
        const yearBox = screen.getByRole("textbox");
        userEvent.type(yearBox, "2033");
        const saveBox = screen.getByRole("button", {
            name: /Save changes/i
        });
        saveBox.click();
        expect(screen.getByText(/Fall 2033/i)).toBeInTheDocument();
    });
    test("Editing the Semester Season and Year again", () => {
        const switchButton = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        switchButton.click();
        const seasonBox = screen.getByRole("textbox");
        userEvent.type(seasonBox, "testing");
        const yearBox = screen.getByRole("textbox");
        userEvent.type(yearBox, "00");
        const saveBox = screen.getByRole("button", {
            name: /Save changes/i
        });
        saveBox.click();
        expect(screen.getByText(/testing 00/i)).toBeInTheDocument();
    });
    test("You can Delete a semester", () => {
        const switchButton = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        switchButton.click();
        const deleteBtn = screen.getByRole("button", {
            name: /Delete Semester/i
        });
        deleteBtn.click();
        expect(sem).not.toBeInTheDocument();
    });
});
