import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseAdd } from "./CourseAdd";
//import userEvent from "@testing-library/user-event";

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
    /*
    test("Autofill works when user types in course code", () => {
        const codeTextBox = screen.getByRole("textbox", {
            name: /Course Code:/i
        });
        userEvent.type(codeTextBox, "CISC210");
        expect(
            screen.getByText(/Introduction to Systems Programming/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });
    */
});
