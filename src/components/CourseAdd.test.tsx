import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseAdd } from "./CourseAdd";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("CourseAdd Component test", () => {
    beforeEach(() => {
        render(
            <CourseAdd
                addCourse={function (): void {
                    throw new Error("Function not implemented");
                }}
            />
        );
        const addButton = screen.getByRole("button", {
            name: /Add New Course/i
        });
        addButton.click();
    });
    test("There are 3 input boxes", () => {
        const inputBoxes = screen.queryAllByRole("textbox");
        expect(inputBoxes).toHaveLength(3);
    });
    test("There are 3 buttons", () => {
        const myButtons = screen.queryAllByRole("button");
        expect(myButtons).toHaveLength(3);
    });
    test("There are 2 buttons labeled Add New Course", () => {
        const addNewButton = screen.queryAllByRole("button", {
            name: /Add New Course/i
        });
        expect(addNewButton).toHaveLength(2);
    });
    test("There is a button labeled Cancel", () => {
        const cancelButton = screen.getByRole("button", { name: /Cancel/i });
        expect(cancelButton).toBeInTheDocument();
    });
    test("'Course Code:' is on the screen", () => {
        expect(screen.getByText(/Course Code:/i)).toBeInTheDocument();
    });
    test("'Course Title:' is on the screen", () => {
        expect(screen.getByText(/Course Title:/i)).toBeInTheDocument();
    });
    test("'Credits:' is on the screen", () => {
        expect(screen.getByText(/Credits:/i)).toBeInTheDocument();
    });
});

describe("CourseAdd functionalitly test", () => {
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
        const addCourseButton = screen.getByRole("button", {
            name: /Add New Course/i
        });
        addCourseButton.click();
    });
    test("Can add a course", () => {
        const codeBox = screen.getByRole("textbox", { name: /Course Code:/i });
        const titleBox = screen.getByRole("textbox", {
            name: /Course Title:/i
        });
        const creditsBox = screen.getByRole("textbox", { name: /Credits:/i });
        const addCourseButton = screen.getAllByRole("button", {
            name: /Add New Course/i
        });
        userEvent.clear(codeBox);
        userEvent.type(codeBox, "TEST101");
        userEvent.clear(titleBox);
        userEvent.type(titleBox, "Test Course");
        userEvent.clear(creditsBox);
        userEvent.type(creditsBox, "9999");
        userEvent.click(addCourseButton[1]);
        expect(screen.getByText(/TEST101/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Course/i)).toBeInTheDocument();
        expect(screen.getByText(/9999/i)).toBeInTheDocument();
    });
    test("Can autofill a course from just the code", () => {
        const codeBox = screen.getByRole("textbox", { name: /Course Code:/i });
        userEvent.clear(codeBox);
        userEvent.type(codeBox, "CISC181");
        const addCourseButton = screen.getAllByRole("button", {
            name: /Add New Course/i
        });
        userEvent.click(addCourseButton[1]);
        expect(screen.getAllByText(/CISC181/i)).toHaveLength(2);
        expect(
            screen.getByText(/Introduction to Computer Science II/i)
        ).toBeInTheDocument();
    });
    test("Cancel button wont add a course", () => {
        const codeBox = screen.getByRole("textbox", { name: /Course Code:/i });
        userEvent.clear(codeBox);
        userEvent.type(codeBox, "CISC181");
        const cancelButton = screen.getByRole("button", {
            name: /Cancel/i
        });
        cancelButton.click();
        expect(
            screen.queryByText(/Introduction to Computer Science II/i)
        ).not.toBeInTheDocument();
    });
    test("Warning message if course doesnt exist", () => {
        const codeBox = screen.getByRole("textbox", { name: /Course Code:/i });
        userEvent.clear(codeBox);
        userEvent.type(codeBox, "TEST200");
        expect(screen.getByText(/Warning/i)).toBeInTheDocument();
    });
});
