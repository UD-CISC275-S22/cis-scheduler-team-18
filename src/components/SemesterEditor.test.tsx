//you can edit semester season + year
//you can delete semester
//you can save changes
//you can cancel (not save changes)
import React from "react";
import { render, screen } from "@testing-library/react";
import { SemesterEditor } from "./semesterEditor";
import userEvent from "@testing-library/user-event";
 
describe("SemesterEditor Component tests", () => {
   beforeEach(() => render(<SemesterEditor />));
   test("Initial text should be 'Your Name is a student'.", () => {
       expect(screen.getByText(/Your Name is a student/i)).toBeInTheDocument();
   });

}

