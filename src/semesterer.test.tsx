import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Semesterer } from "./semesterer";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<Semesterer />);
    });
});
