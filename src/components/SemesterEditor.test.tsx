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

describe("PlanEditor Component Tests", () => {
    beforeEach(() => {
        render(
            <SemesterEditor
                show={false}
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
    test("Figure out how to test modals", () => {
        //to do
    });
});
