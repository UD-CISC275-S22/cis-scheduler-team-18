//test multipleSemesterTable
//does it make a table?
//will it display multiple tables?
import React from "react";
import { render, screen } from "@testing-library/react";
import { MultipleSemesterTable } from "./MultipleSemesterTable";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(
            <MultipleSemesterTable
                planId={}
                semester={}
                updateCoursePlan={}
                updateEditedCourse={}
                updateDeletedCourse={}
            />
        );
    });
    test("Season is Displayed", () => {
        const season = screen.getByText(
            /fall/i || /summer/i || /spring/i || /winter/i
        );
        expect(season).toBeInTheDocument();
    });
    test("Year is Disaplayed", () => {
        //figure this out
    });
    test("Courses in a Semester are displayed", () => {
        //figure this out
    });
    test("All semesters in a plan are displayed", () => {
        //figure this out
    });
});
