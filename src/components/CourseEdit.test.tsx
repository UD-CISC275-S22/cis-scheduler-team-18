import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseEdit } from "./CourseEdit";
import { Course } from "../interfaces/course";
import userEvent from "@testing-library/user-event";
import App from "../App";

const testCourse: Course = {
    code: "TEST101",
    name: "Intro to Testing",
    descr: "Course used for testing",
    credits: "3",
    preReq: "",
    restrict: "",
    breadth: "",
    typ: ""
};
describe("CourseEdit Component test", () => {
    beforeEach(() => {
        render(
            <CourseEdit
                course={testCourse}
                editCourse={function (): void {
                    throw new Error("Function not implemented");
                }}
                deleteCourse={function (): void {
                    throw new Error("Function not implemented");
                }}
            />
        );
        const editButton = screen.getByRole("button", {
            name: /Edit Course/i
        });
        editButton.click();
    });
    test("There are 2 input boxes", () => {
        const inputBoxes = screen.queryAllByRole("textbox");
        expect(inputBoxes).toHaveLength(2);
    });
    test("There is a number input box", () => {
        const numberBox = screen.queryAllByRole("spinbutton");
        expect(numberBox).toHaveLength(1);
    });
    test("There are 5 buttons", () => {
        const myButtons = screen.queryAllByRole("button");
        expect(myButtons).toHaveLength(5);
    });
    test("There is a button labeled Save Changes", () => {
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        expect(saveButton).toBeInTheDocument();
    });
    test("There is a button labeled Cancel", () => {
        const cancelButton = screen.getByRole("button", { name: /Cancel/i });
        expect(cancelButton).toBeInTheDocument();
    });
    test("There is a button labeled Delete Course", () => {
        const deleteButton = screen.getByRole("button", {
            name: /Delete Course/i
        });
        expect(deleteButton).toBeInTheDocument();
    });
    test("There is a button labeled Revert to original", () => {
        const revertButton = screen.getByRole("button", {
            name: /Revert to original/i
        });
        expect(revertButton).toBeInTheDocument();
    });
    test("'Change Course Code:' is on the screen", () => {
        expect(screen.getByText(/Change Course Code:/i)).toBeInTheDocument();
    });
    test("'Change Course Title:' is on the screen", () => {
        expect(screen.getByText(/Change Course Title:/i)).toBeInTheDocument();
    });
    test("'Change Course Credits:' is on the screen", () => {
        expect(screen.getByText(/Change Course Credits:/i)).toBeInTheDocument();
    });
});
describe("CourseEdit functionalitly test", () => {
    beforeEach(() => {
        render(<App />);
        const addPlanButton = screen.getByRole("button", {
            name: /Add New Plan/i
        });
        addPlanButton.click();

        const planIdBox = screen.getByRole("textbox", {
            name: /ID of New Plan:/i
        });
        const planNameBox = screen.getByRole("textbox", {
            name: /Name of New Plan:/i
        });
        const savePlanButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        userEvent.type(planIdBox, "0000");
        userEvent.type(planNameBox, "Test Plan");
        savePlanButton.click();
        const editCourseButton = screen.getByRole("button", {
            name: /Edit Course/i
        });
        editCourseButton.click();
    });
    test("Can edit Course Code", () => {
        const codeTextbox = screen.getByRole("textbox", {
            name: /Change Course Code:/i
        });
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        userEvent.type(codeTextbox, "TEST101");
        saveButton.click();
        expect(screen.getByText(/TEST101/i)).toBeInTheDocument();
    });
    test("Can edit Course Title", () => {
        const titleTextbox = screen.getByRole("textbox", {
            name: /Change Course Title:/i
        });
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        userEvent.type(titleTextbox, "Course used for testing");
        saveButton.click();
        expect(
            screen.getByText(/Course used for testing/i)
        ).toBeInTheDocument();
    });
    test("Can edit Course Credits", () => {
        const creditsBox = screen.getByRole("spinbutton", {
            name: /Change Course Credits:/i
        });
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        userEvent.type(creditsBox, "9999");
        saveButton.click();
        expect(screen.getByText(/9999/i)).toBeInTheDocument();
    });
    test("Can revert Course Code", () => {
        const codeTextbox = screen.getByRole("textbox", {
            name: /Change Course Code:/i
        });
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        userEvent.type(codeTextbox, "TEST101");
        saveButton.click();
        const editButton = screen.getByRole("button", {
            name: /Edit Course/i
        });
        editButton.click();
    });
});
