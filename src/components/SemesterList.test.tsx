//dk what to test here
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SemesterList } from "./semesterList";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<SemesterList />);
    });
});