//if in editing mode, calls semester editor
//else, calls multipleSemesterTable
//edit semester button
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterView } from "./SemesterView";
import semesterPlan from "../data/semesterPlan.json";

const plan = semesterPlan[0];
const sem = plan.semesters[0];

describe("SemesterView Component Tests", () => {
    beforeEach(() => {
        render(
            <SemesterView
                semester={sem}
                editSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
                deleteSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
                plan={plan}
                plans={[]}
                setPlans={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setSemesters={function (): void {
                    throw new Error("Function not implemented.");
                }}
                setData={function (): void {
                    throw new Error("Function not implemented.");
                }}
            />
        );
    });
    test("There is a button labeled Edit Semester", () => {
        const editSemBtn = screen.getByRole("button", {
            name: /Edit Semester/i
        });
        expect(editSemBtn).toBeInTheDocument();
    });
});
