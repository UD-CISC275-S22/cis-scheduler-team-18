//edit semester button
//calls multipleSemesterTable
//does it display multiple semesters?
//do the multiple semesters have courses?
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterView } from "./semesterView";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(
            <SemesterView
                semester={}
                editSemester={}
                deleteSemester={}
                updateCoursePlan={}
                planId={}
                updateEditedSemester={}
                updateEditedCourse={}
                updateDeletedCourse={}
            />
        );
    });
    test("There is an Edit Semester Button", () => {
        const editSemBtn = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        expect(editSemBtn).toBeInTheDocument();
    });
    test("If not in Editing Mode, Display the Semester in a table View with courses", () => {
        //figure out how to do this
    });
    test("If Edit Semester is Clicked, Modal will popup", () => {
        const editSemBtn = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        editSemBtn.click();
        const seasonBox = screen.getByRole("textbox");
        const yearBox = screen.getByRole("textbox");
        const saveChangesBtn = screen.getByRole("button", {
            name: /Save Changes/i
        });
        const cancelBtn = screen.getByRole("button", {
            name: /Cancel/i
        });
        const deleteSemBtn = screen.getByRole("button", {
            name: /Delete Semester/i
        });
        expect(
            seasonBox && yearBox && saveChangesBtn && cancelBtn && deleteSemBtn
        ).toBeInTheDocument();
    });
});
