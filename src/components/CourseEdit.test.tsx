import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseEdit } from "./CourseEdit";
import { Course } from "../interfaces/course";
//import userEvent from "@testing-library/user-event";

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
    /*
    test("Course Code Can be edited", () => {
        const editCodeBox = screen.getByRole("textbox", {
            name: /Change Course Code:/i
        });
        const saveButton = screen.getByRole("button", {
            name: /Save Changes/i
        });
        userEvent.type(editCodeBox, "TEST102");
        saveButton.click();
        expect(testCourse.code).toEqual("TEST102");
    });
    */
});
