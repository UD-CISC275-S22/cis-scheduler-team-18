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
    test("Can choose a course and add it to the pool", () => {
        const select = screen.getByRole("combobox");
        userEvent.selectOptions(select, "CISC220");
        expect(
            screen.getByText(/CISC220: Data Structures/i)
        ).toBeInTheDocument();
    });
});
