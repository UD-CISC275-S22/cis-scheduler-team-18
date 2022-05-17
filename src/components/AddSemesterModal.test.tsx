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
import App from "../App";

test("There are 2 input boxes", () => {
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
    const inputBoxes = screen.queryAllByRole("textbox");
    expect(inputBoxes).toHaveLength(2);
});
test("There is a number box for year", () => {
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
    const numBox = screen.getByRole("spinbutton");
    expect(numBox).toBeInTheDocument();
});
test("There are 3 buttons", () => {
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
    const buttons = screen.queryAllByRole("button");
    expect(buttons).toHaveLength(3);
});
test("There is a Button Labeled Save Changes", () => {
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
    const saveBtn = screen.getByRole("button", { name: /Save Changes/i });
    expect(saveBtn).toBeInTheDocument();
});
test("There is a Close Button", () => {
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
    const cancelBtn = screen.queryAllByRole("button", { name: /Close/i });
    expect(cancelBtn).toHaveLength(2);
});
test("Add a Semester is On Screen", () => {
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
    expect(screen.getByText(/Add a Semester/i)).toBeInTheDocument();
});
test("Semester ID: Is on Screen", () => {
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
    expect(screen.getByText(/Semester ID:/i)).toBeInTheDocument();
});
test("Season: Is on Screen", () => {
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
    expect(screen.getByText(/Season/i)).toBeInTheDocument();
});
test("Year: Is on Screen", () => {
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
    expect(screen.getByText(/Year:/i)).toBeInTheDocument();
});
test("You can add a Semester", () => {
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
    const addSemBtn = screen.getByRole("button", { name: /Add Semester/i });
    addSemBtn.click();
    const idTB = screen.getByRole("textbox", { name: /Semester ID:/i });
    userEvent.type(idTB, "{selectall}test");
    const semTB = screen.getByRole("textbox", {
        name: /Season:/i
    });
    userEvent.type(semTB, "{selectall}Fall");
    const yearTB = screen.getByRole("spinbutton", { name: /Year:/i });
    userEvent.type(yearTB, "{selesctall}2025");
    const saveBtn = screen.getAllByRole("button", { name: /Save Changes/i });
    //userEvent.click(saveBtn[1]);
    userEvent.click(saveBtn[0]);
    expect(screen.getByText(/Fall 2025/i)).toBeInTheDocument();
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
    const addSemBtn = screen.getByRole("button", { name: /Add Semester/i });
    addSemBtn.click();
    const idTB = screen.getByRole("textbox", { name: /Semester ID/i });
    userEvent.type(idTB, "{select}test");
    const semTB = screen.getByRole("textbox", {
        name: /Season:/i
    });
    userEvent.type(semTB, "{selectall}Fall");
    const yearTB = screen.getByRole("spinbutton", { name: /Year:/i });
    userEvent.type(yearTB, "{selectall}2025");
    const cancelBtn = screen.queryAllByRole("button", { name: /Close/i });
    userEvent.click(cancelBtn[1]);
    expect(screen.queryByText(/Fall 2025/i)).not.toBeInTheDocument();
});
