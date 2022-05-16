//this is going to be extremely long
//checks to see all missing requirements in the document

import React from "react";
import { render, screen } from "@testing-library/react";
import { CheckDegreeReq } from "./CheckDegreeReqs";
import semesterPlan from "../data/semesterPlan.json";
import userEvent from "@testing-library/user-event";

const plan = semesterPlan[0];

describe("CheckDegreeReqs Component Tests", () => {
    beforeEach(() => {
        render(<CheckDegreeReq plan={plan} />);
    });
    test("There is a select box", () => {
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("The Combo Box Works - Aritificial Intelligence", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Artificial Intelligence and Robotics");
        expect(
            screen.getByText(
                /You have selected: Artificial Intelligence and Robotics/i
            )
        ).toBeInTheDocument();
    });
    test("The Combo Box Works - Bioinformatics", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Bioinformatics");
        expect(
            screen.getByText(/You have selected: Bioinformatics/i)
        ).toBeInTheDocument();
    });
    test("The Combo Box Works - CyberSecurity", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "CyberSecurity");
        expect(
            screen.getByText(/You have selected: CyberSecurity/i)
        ).toBeInTheDocument();
    });
    test("The Combo Box Works - Data Science", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Data Science");
        expect(
            screen.getByText(/You have selected: Data Science/i)
        ).toBeInTheDocument();
    });
    test("The Combo Box Works - High Performance Computing", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "High Performance Computing");
        expect(
            screen.getByText(/You have selected: High Performance Computing/i)
        ).toBeInTheDocument();
    });
    test("The Combo Box Works - Systems and Networks", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Systems and Networks");
        expect(
            screen.getByText(/You have selected: Systems and Networks/i)
        ).toBeInTheDocument();
    });
    test("The Combo Box Works - Theory and Computation", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "Theory and Computation");
        expect(
            screen.getByText(/You have selected: Theory and Computation/i)
        ).toBeInTheDocument();
    });
    test("The initial is Empty", () => {
        expect(screen.getByText(/You have selected:/i)).toBeInTheDocument();
    });
    test("Missing Requirements: is in the document", () => {
        expect(screen.getByText(/Missing Requirements/i)).toBeInTheDocument();
    });
});
