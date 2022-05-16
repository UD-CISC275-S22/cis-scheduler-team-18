//this is going to be extremely long
//checks to see all missing requirements in the document

import React from "react";
import { render, screen } from "@testing-library/react";
import { CheckDegreeReq } from "./CheckDegreeReqs";
import semesterPlan from "../data/semesterPlan.json";

const plan = semesterPlan[0];

describe("CheckDegreeReqs Component Tests", () => {
    beforeEach(() => {
        render(<CheckDegreeReq plan={plan} />);
    });
    test("Figure out what to test", () => {
        //to do
    });
});
