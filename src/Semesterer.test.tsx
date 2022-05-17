//semesterer:
//clear all semesters
//add a semester

import React from "react";
import { render, screen } from "@testing-library/react";
import { Semesterer } from "./semesterer";
import semesterPlan from "./data/semesterPlan.json";
import { Plan } from "./interfaces/plan";
import App from "./App";
import userEvent from "@testing-library/user-event";

const plan = semesterPlan[0];
const plans = semesterPlan.map((plan: Plan): Plan => plan);

test("There is a Clear All Sems Btn", () => {
    render(
        <Semesterer
            plan={plan}
            plans={plans}
            setPlans={function (): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const clearSemsBtn = screen.getByRole("button", {
        name: /Clear All Semesters/i
    });
    expect(clearSemsBtn).toBeInTheDocument();
});
test("There is an Add Semester Button", () => {
    render(
        <Semesterer
            plan={plan}
            plans={plans}
            setPlans={function (): void {
                throw new Error("Function not implemented.");
            }}
            setData={function (): void {
                throw new Error("Function not implemented.");
            }}
        />
    );
    const addSemBtn = screen.getByRole("button", {
        name: /Add Semester/i
    });
    expect(addSemBtn).toBeInTheDocument();
});
//test: clear all sems
//tes: add a sem
test("Clear All Sems Works", () => {
    //this is hard to test because all the courses are an option for course pool
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New Plan/i });
    addPlanBtn.click();
    const planId = screen.getByRole("textbox", { name: /ID of New Plan/i });
    userEvent.type(planId, "tester-plan");
    const planName = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(planName, "tester plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    const clearCourseBtn = screen.getByRole("button", {
        name: /Clear All Courses/
    });
    clearCourseBtn.click();
    expect(screen.queryByText(/filler Course/i)).not.toBeInTheDocument();
});
test("Add a Semester", () => {
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New Plan/i });
    addPlanBtn.click();
    const planId = screen.getByRole("textbox", { name: /ID of New Plan/i });
    userEvent.type(planId, "tester-plan");
    const planName = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(planName, "tester plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    const addASemBtn = screen.getByRole("button", { name: /Add Semester/i });
    addASemBtn.click();
    const semIdTB = screen.getByRole("textbox", { name: /Semester ID:/i });
    userEvent.type(semIdTB, "Tester");
    const sznTB = screen.getByRole("textbox", { name: /Season:/i });
    userEvent.type(sznTB, "Winter");
    const yearTB = screen.getByRole("spinbutton", { name: /Year:/i });
    userEvent.type(yearTB, "2090");
    const saveBtn = screen.getByRole("button", { name: /Save Changes/i });
    userEvent.click(saveBtn);
    expect(screen.getByText(/Winter 2090/i)).toBeInTheDocument();
});
