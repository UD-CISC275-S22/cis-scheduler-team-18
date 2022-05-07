//add semester button
//semester ID
//season
//year
//close
//save changes
import React from "react";
import { render, screen } from "@testing-library/react";
import { AddSemesterModal } from "./addSemesterModal";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(
            <AddSemesterModal
                planId={}
                show={}
                handleClose={}
                addSemester={}
                updateSemesterPlan={}
            />
        );
    });
    test("Add Semester Button Works", () => {
        const addSem = screen.getByRole("button", {
            name: /Add Semester/i
        });
        addSem.click();
        const semId = screen.getByRole("textbox");
        const season = screen.getByRole("textbox");
        const year = screen.getByRole("textbox");
        const save = screen.getByRole("button", {
            name: /Save/i
        });
        const close = screen.getByRole("button", {
            name: /Close/i
        });
        expect(semId && season && year && save && close).toBeInTheDocument();
    });
    test("Save new Semester is added to a plan", () => {
        //figure this out
    });
});
