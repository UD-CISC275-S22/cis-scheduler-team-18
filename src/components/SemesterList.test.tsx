//Semester List: returns SemesterView
//Test to make sure there are semester's in the website
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterList } from "./semesterList";
import semesterPlan from "../data/semesterPlan.json";
import { Semester } from "../interfaces/semester";

const plan = semesterPlan[0];
const semesters = plan.semesters.map((sem: Semester): Semester => sem);

describe("SemesterList Component tests", () => {
    beforeEach(() => {
        render(
            <SemesterList
                semesters={semesters}
                deleteSemester={function (): void {
                    throw new Error("Function not implemented.");
                }}
                editSemester={function (): void {
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
    test("I'm not sure what to test", () => {
        //do something
    });
});
