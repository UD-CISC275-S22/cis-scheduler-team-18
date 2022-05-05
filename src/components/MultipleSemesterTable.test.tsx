//test multipleSemesterTable
//does it make a table?
//will it display multiple tables?
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<MultipleSemesterTable />);
    });
});