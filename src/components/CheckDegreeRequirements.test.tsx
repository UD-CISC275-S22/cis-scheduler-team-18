//test CheckDegreeRequirements
//does it display the right degree requirements that are missing?
//does it update when you add a new course?
//does it update when you delete a course?
//does it update when you edit a course?
import React from "react";
import { render, screen } from "@testing-library/react";
import { CheckDegreeReq } from "./CheckDegreeReqs";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<CheckDegreeReq plan={} />);
    });
    test("All Concentrations are available", () => {

    });
    test("You can Choose your Concentration", () => {

    });
    test("Missing Core Reqs", () => {

    });
    test("Missing Tech Elects", () => {

    });
    test("Missing DLE", () => {

    });
    test("Missing Capstone", () => {

    });
    test("Missing Multicultural", () => {

    });
    test("Missing University Breadths", () => {

    });
    test("Missing COE Breadths", () => {

    });
    test("Missing Science Sequence", () => {

    });
    test("Missing Additional Science", () => {

    });
    test("Not enough Credits", () => {

    });
});
