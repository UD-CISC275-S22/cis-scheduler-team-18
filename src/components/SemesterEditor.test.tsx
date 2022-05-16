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
import App from "../App";
import { Semesterer } from "../semesterer";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
import { PlanList } from "./PlanList";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import { SemesterView } from "./semesterView";
import { SemesterList } from "./semesterList";

const plan = semesterPlan[0];
const plans = semesterPlan.map((plan: Plan): Plan => plan);
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
//test:
//you can edit a semester and save changes - done
//you can delete a semester
//Cancel works (does nothing)
test("You Can Edit a Semester (Save Changes Button Works)", () => {
    render(<App />);
    const addNewPlanBtn = screen.getByRole("button", { name: /Add New Plan/i });
    addNewPlanBtn.click();
    const newPlanId = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(newPlanId, "testing-2022");
    const nameNewPlan = screen.getByRole("textbox", {
        name: /Name of New Plan:/i
    });
    userEvent.type(nameNewPlan, "Tester Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    const editSemBtn = screen.getByRole("button", { name: /Edit Semester/i });
    editSemBtn.click();
    const semSeasonTb = screen.getByRole("textbox", {
        name: /Semester Season:/i
    });
    userEvent.type(semSeasonTb, "{selectall}Winter");
    const semYear = screen.getByRole("spinbutton", { name: /Semester Year:/i });
    userEvent.type(semYear, "{selectall}2028");
    const saveBtn = screen.getAllByRole("button", { name: /Save/i });
    userEvent.click(saveBtn[1]);
    expect(screen.getByText(/Winter 2028/i)).toBeInTheDocument();
    expect(screen.queryByText(/Summer 2020/i)).not.toBeInTheDocument();
});
test("Cancel Button Works", () => {
    render(<App />);
    const addNewPlanBtn = screen.getByRole("button", { name: /Add New Plan/i });
    addNewPlanBtn.click();
    const newPlanId = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(newPlanId, "testing-2022");
    const nameNewPlan = screen.getByRole("textbox", {
        name: /Name of New Plan:/i
    });
    userEvent.type(nameNewPlan, "Tester Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    const editSemBtn = screen.getByRole("button", { name: /Edit Semester/i });
    editSemBtn.click();
    const semSeasonTb = screen.getByRole("textbox", {
        name: /Semester Season:/i
    });
    userEvent.type(semSeasonTb, "{selectall}Winter");
    const semYear = screen.getByRole("spinbutton", { name: /Semester Year:/i });
    userEvent.type(semYear, "{selectall}2028");
    const cancelBtn = screen.getByRole("button", { name: /Cancel/i });
    //const saveBtn = screen.getAllByRole("button", { name: /Save/i });
    userEvent.click(cancelBtn);
    expect(screen.getByText(/Summer 2020/i)).toBeInTheDocument();
    expect(screen.queryByText(/Winter 2028/i)).not.toBeInTheDocument();
});
