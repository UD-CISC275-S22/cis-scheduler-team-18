import React from "react";
import { render, screen } from "@testing-library/react";
import { CourseInfo } from "./CourseInfo";
import { Course } from "../interfaces/course";

const testCourse: Course = {
    code: "TEST101",
    name: "Intro to Testing",
    descr: "Course used for testing",
    credits: "3",
    preReq: "TEST100",
    restrict: "Must be writing a test",
    breadth: "",
    typ: "Spring"
};
describe("CourseInfo Component test", () => {
    beforeEach(() => {
        render(<CourseInfo course={testCourse} />);
        const infoButton = screen.getByRole("button", { name: /Course Info/i });
        infoButton.click();
    });
    test("Code is on the screen", () => {
        expect(screen.getByText(/TEST101/i)).toBeInTheDocument();
    });
    test("Name is on the screen", () => {
        expect(screen.getByText(/Intro to Testing/i)).toBeInTheDocument();
    });
    test("Description is on the screen", () => {
        expect(
            screen.getByText(/Course used for testing/i)
        ).toBeInTheDocument();
    });
    test("credits is on the screen", () => {
        expect(screen.getByText(/3/i)).toBeInTheDocument();
    });
    test("PreReq is on the screen", () => {
        expect(screen.getByText(/TEST100/i)).toBeInTheDocument();
    });
    test("Restrictions are on the screen", () => {
        expect(screen.getByText(/Must be writing a test/i)).toBeInTheDocument();
    });
    test("Type is on the screen", () => {
        expect(screen.getByText(/Spring/i)).toBeInTheDocument();
    });
});
