import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Drag } from "./Drag";

describe("PlanEditor Component tests", () => {
    beforeEach(() => {
        render(<Drag />);
    });
    test("The initial pool is empty", () => {
        const currentPool = screen.queryAllByRole("listitem");
        expect(currentPool).toHaveLength(0);
    });
    test("There is a select box", () => {
        expect(screen.getByRole("combobox")).toBeInTheDocument();
    });
    test("a) Can choose a course and add it to the pool", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "CISC 220");
        expect(
            screen.getByText(/CISC 220: Data Structures/i)
        ).toBeInTheDocument();
    });
    test("b) Can choose a course and add it to the pool", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "CISC 260");
        expect(
            screen.getByText(
                /CISC 260: Machine Organization and Assembly Language/i
            )
        ).toBeInTheDocument();
    });
    test("c) Can choose a course and add it to the pool", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "CISC 210");
        expect(
            screen.getByText(/CISC 210: Introduction to Systems Programming/i)
        ).toBeInTheDocument();
    });
    test("d) Can choose a course and add it to the pool", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "CISC 275");
        expect(
            screen.getByText(/CISC 275: Introduction to Software Engineering/i)
        ).toBeInTheDocument();
    });
});
