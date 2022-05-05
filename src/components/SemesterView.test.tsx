//edit semester button
//calls multipleSemesterTable
//does it display multiple semesters?
//do the multiple semesters have courses?
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SemesterView } from "./semesterView";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<SemesterView />);
    });
});