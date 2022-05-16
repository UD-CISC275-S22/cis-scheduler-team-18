import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
    beforeEach(() => {
        render(<App />);
    });
    test("renders the header somewhere", () => {
        const linkElement = screen.getByText(
            /CISC275: Team 18 - Mycah Detorres, Brielle Hina, Abigail Walters/i
        );
        expect(linkElement).toBeInTheDocument();
    });
    test("There is a button labeled Save All Changes", () => {
        const mySaveAllButton = screen.getByRole("button", {
            name: /Save All Changes/i
        });
        expect(mySaveAllButton).toBeInTheDocument();
    });
    test("There is a button labeled Add New Plan", () => {
        const myAddPlanButton = screen.getByRole("button", {
            name: /Add New Plan/i
        });
        expect(myAddPlanButton).toBeInTheDocument();
    });
});
