//test CheckDegreeRequirements
//does it display the right degree requirements that are missing?
//does it update when you add a new course?
//does it update when you delete a course?
//does it update when you edit a course?
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { CheckDegreeReqs } from "./checkDegreeReqs";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<CheckDegreeReqs />);
    });
});
