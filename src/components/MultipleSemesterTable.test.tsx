//test multipleSemesterTable
//does it make a table?
//will it display multiple tables?
import React from "react";
import { render, screen } from "@testing-library/react";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import userEvent from "@testing-library/user-event";
 
describe("SemesterEditor Component tests", () => {
   beforeEach(() => render(<MultipleSemesterTable planId={""} semester={undefined} updateCoursePlan={function (planId: string, semesterId: string, newCourse: Course): void {
       throw new Error("Function not implemented.");
   } } updateEditedCourse={function (planId: string, semId: string, courseCode: string, newCode: string, newName: string, newCredits: string): void {
       throw new Error("Function not implemented.");
   } } updateDeletedCourse={function (planId: string, semId: string, courseCode: string): void {
       throw new Error("Function not implemented.");
   } } />));
   test("Initial text should be 'Your Name is a student'.", () => {
       expect(screen.getByText(/Your Name is a student/i)).toBeInTheDocument();
   });
}