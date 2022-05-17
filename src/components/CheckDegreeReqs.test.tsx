//this is going to be extremely long
//checks to see all missing requirements in the document

import React from "react";
import { render, screen } from "@testing-library/react";
import { CheckDegreeReq } from "./CheckDegreeReqs";
import semesterPlan from "../data/semesterPlan.json";
import userEvent from "@testing-library/user-event";
import App from "../App";

const plan = semesterPlan[0];

test("There is a Select Box", () => {
    render(<CheckDegreeReq plan={plan} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
});
test("The Combobox Works - AI", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "Artificial Intelligence and Robotics");
    expect(
        screen.getByText(
            /You have selected: Artificial Intelligence and Robotics/i
        )
    ).toBeInTheDocument();
});
test("The Combobox Works - Bioinformatics", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "Bioinformatics");
    expect(
        screen.getByText(/You have selected: Bioinformatics/i)
    ).toBeInTheDocument();
});
test("The Combobox Works - CyberSecurity", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "CyberSecurity");
    expect(
        screen.getByText(/You have selected: CyberSecurity/i)
    ).toBeInTheDocument();
});
test("The Combobox Works - Data Science", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "Data Science");
    expect(
        screen.getByText(/You have selected: Data Science/i)
    ).toBeInTheDocument();
});
test("The Combobox Works - High Performance Computing", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "High Performance Computing");
    expect(
        screen.getByText(/You have selected: High Performance Computing/i)
    ).toBeInTheDocument();
});
test("The Combobox Works - Systems and Networks", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "Systems and Networks");
    expect(
        screen.getByText(/You have selected: Systems and Networks/i)
    ).toBeInTheDocument();
});
test("The Combobox Works - Theory and Computation", () => {
    render(<CheckDegreeReq plan={plan} />);
    const select = screen.getByRole("combobox");
    userEvent.selectOptions(select, "Theory and Computation");
    expect(
        screen.getByText(/You have selected: Theory and Computation/i)
    ).toBeInTheDocument();
});
test("The initial option is empty", () => {
    render(<CheckDegreeReq plan={plan} />);
    expect(screen.getByText(/You have selected:/i)).toBeInTheDocument();
});
test("Missing Requirements: is in the document", () => {
    render(<CheckDegreeReq plan={plan} />);
    expect(screen.getByText(/Missing Requirements/i)).toBeInTheDocument();
});
test("Empty plan: No Requirements Met", () => {
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New plan/i });
    addPlanBtn.click();
    const idTB = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(idTB, "Tester-Plan");
    const nameTB = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(nameTB, "Empty Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    //all requirements are missing
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(screen.getByText("University Requirement: DLE")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
        )
    ).toBeInTheDocument();
    expect(screen.getByText("MATH205 or MATH350")).toBeInTheDocument();
    expect(screen.getByText("ENGL312 or ENGL410")).toBeInTheDocument();
    expect(
        screen.getByText("Science Sequence Requirement")
    ).toBeInTheDocument();
    expect(
        screen.getByText("4 Credits Additional Science")
    ).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group A")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group B")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group C")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group D")).toBeInTheDocument();
    expect(screen.getByText("124 Credits Needed")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Major Requirement: Tech Electives - CISC301+ (6 credits)"
        )
    ).toBeInTheDocument();
    expect(
        screen.getByText("9 Additional Breadth Credits NOT Group D")
    ).toBeInTheDocument();
    expect(
        screen.getByText("6 Upper Level Breadth Credits (300+)")
    ).toBeInTheDocument();
    //this throws an error because there are multiple ones
    expect(screen.getAllByText("CISC 108")).toHaveLength(2);
    expect(screen.getAllByText("CISC 181")).toHaveLength(2);
    expect(screen.getAllByText("CISC 210")).toHaveLength(2);
    expect(screen.getAllByText("CISC 220")).toHaveLength(2);
    expect(screen.getAllByText("CISC 260")).toHaveLength(2);
    expect(screen.getAllByText("CISC 275")).toHaveLength(2);
    expect(screen.getAllByText("CISC 303")).toHaveLength(2);
    expect(screen.getAllByText("CISC 320")).toHaveLength(2);
    expect(screen.getAllByText("CISC 361")).toHaveLength(2);
    expect(screen.getAllByText("CISC 372")).toHaveLength(2);
    expect(screen.getAllByText("MATH 210")).toHaveLength(2);
    expect(screen.getAllByText("MATH 241")).toHaveLength(2);
    expect(screen.getAllByText("MATH 242")).toHaveLength(2);
    expect(screen.getAllByText("CISC 355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL 110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG 101")).toHaveLength(2);
});
test("Group A Req Met", () => {
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New plan/i });
    addPlanBtn.click();
    const idTB = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(idTB, "Tester-Plan");
    const nameTB = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(nameTB, "Empty Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    //add AFRA215
    const appAddCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddCourse.click();
    const courseCodeTB = screen.getByRole("textbox", { name: /Course Code:/i });
    userEvent.type(courseCodeTB, "{selectall}AFRA 206");
    const modalAddCourse = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalAddCourse[1]);
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(screen.getByText("University Requirement: DLE")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
        )
    ).toBeInTheDocument();
    expect(screen.getByText("MATH205 or MATH350")).toBeInTheDocument();
    expect(screen.getByText("ENGL312 or ENGL410")).toBeInTheDocument();
    expect(
        screen.getByText("Science Sequence Requirement")
    ).toBeInTheDocument();
    expect(
        screen.getByText("4 Credits Additional Science")
    ).toBeInTheDocument();
    expect(
        screen.queryByText("University Breadth: Group A")
    ).not.toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group B")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group C")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group D")).toBeInTheDocument();
    expect(screen.getByText("124 Credits Needed")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Major Requirement: Tech Electives - CISC301+ (6 credits)"
        )
    ).toBeInTheDocument();
    expect(
        screen.getByText("9 Additional Breadth Credits NOT Group D")
    ).toBeInTheDocument();
    expect(
        screen.getByText("6 Upper Level Breadth Credits (300+)")
    ).toBeInTheDocument();
    //this throws an error because there are multiple ones
    expect(screen.getAllByText("CISC 108")).toHaveLength(2);
    expect(screen.getAllByText("CISC 181")).toHaveLength(2);
    expect(screen.getAllByText("CISC 210")).toHaveLength(2);
    expect(screen.getAllByText("CISC 220")).toHaveLength(2);
    expect(screen.getAllByText("CISC 260")).toHaveLength(2);
    expect(screen.getAllByText("CISC 275")).toHaveLength(2);
    expect(screen.getAllByText("CISC 303")).toHaveLength(2);
    expect(screen.getAllByText("CISC 320")).toHaveLength(2);
    expect(screen.getAllByText("CISC 361")).toHaveLength(2);
    expect(screen.getAllByText("CISC 372")).toHaveLength(2);
    expect(screen.getAllByText("MATH 210")).toHaveLength(2);
    expect(screen.getAllByText("MATH 241")).toHaveLength(2);
    expect(screen.getAllByText("MATH 242")).toHaveLength(2);
    expect(screen.getAllByText("CISC 355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL 110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG 101")).toHaveLength(2);
});

test("Group B Req Met", () => {
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New plan/i });
    addPlanBtn.click();
    const idTB = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(idTB, "Tester-Plan");
    const nameTB = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(nameTB, "Empty Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    //add AFRA215
    const appAddCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddCourse.click();
    const courseCodeTB = screen.getByRole("textbox", { name: /Course Code:/i });
    userEvent.type(courseCodeTB, "{selectall}AFRA 110");
    const modalAddCourse = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalAddCourse[1]);
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(screen.getByText("University Requirement: DLE")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
        )
    ).toBeInTheDocument();
    expect(screen.getByText("MATH205 or MATH350")).toBeInTheDocument();
    expect(screen.getByText("ENGL312 or ENGL410")).toBeInTheDocument();
    expect(
        screen.getByText("Science Sequence Requirement")
    ).toBeInTheDocument();
    expect(
        screen.getByText("4 Credits Additional Science")
    ).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group A")).toBeInTheDocument();
    expect(
        screen.queryByText("University Breadth: Group B")
    ).not.toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group C")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group D")).toBeInTheDocument();
    expect(screen.getByText("124 Credits Needed")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Major Requirement: Tech Electives - CISC301+ (6 credits)"
        )
    ).toBeInTheDocument();
    expect(
        screen.getByText("9 Additional Breadth Credits NOT Group D")
    ).toBeInTheDocument();
    expect(
        screen.getByText("6 Upper Level Breadth Credits (300+)")
    ).toBeInTheDocument();
    //this throws an error because there are multiple ones
    expect(screen.getAllByText("CISC 108")).toHaveLength(2);
    expect(screen.getAllByText("CISC 181")).toHaveLength(2);
    expect(screen.getAllByText("CISC 210")).toHaveLength(2);
    expect(screen.getAllByText("CISC 220")).toHaveLength(2);
    expect(screen.getAllByText("CISC 260")).toHaveLength(2);
    expect(screen.getAllByText("CISC 275")).toHaveLength(2);
    expect(screen.getAllByText("CISC 303")).toHaveLength(2);
    expect(screen.getAllByText("CISC 320")).toHaveLength(2);
    expect(screen.getAllByText("CISC 361")).toHaveLength(2);
    expect(screen.getAllByText("CISC 372")).toHaveLength(2);
    expect(screen.getAllByText("MATH 210")).toHaveLength(2);
    expect(screen.getAllByText("MATH 241")).toHaveLength(2);
    expect(screen.getAllByText("MATH 242")).toHaveLength(2);
    expect(screen.getAllByText("CISC 355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL 110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG 101")).toHaveLength(2);
});

test("Group C Req Met", () => {
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New plan/i });
    addPlanBtn.click();
    const idTB = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(idTB, "Tester-Plan");
    const nameTB = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(nameTB, "Empty Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    //add AFRA215
    const appAddCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddCourse.click();
    const courseCodeTB = screen.getByRole("textbox", { name: /Course Code:/i });
    userEvent.type(courseCodeTB, "{selectall}AFRA 215");
    const modalAddCourse = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalAddCourse[1]);
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(screen.getByText("University Requirement: DLE")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
        )
    ).toBeInTheDocument();
    expect(screen.getByText("MATH205 or MATH350")).toBeInTheDocument();
    expect(screen.getByText("ENGL312 or ENGL410")).toBeInTheDocument();
    expect(
        screen.getByText("Science Sequence Requirement")
    ).toBeInTheDocument();
    expect(
        screen.getByText("4 Credits Additional Science")
    ).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group A")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group B")).toBeInTheDocument();
    expect(
        screen.queryByText("University Breadth: Group C")
    ).not.toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group D")).toBeInTheDocument();
    expect(screen.getByText("124 Credits Needed")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Major Requirement: Tech Electives - CISC301+ (6 credits)"
        )
    ).toBeInTheDocument();
    expect(
        screen.getByText("9 Additional Breadth Credits NOT Group D")
    ).toBeInTheDocument();
    expect(
        screen.getByText("6 Upper Level Breadth Credits (300+)")
    ).toBeInTheDocument();
    //this throws an error because there are multiple ones
    expect(screen.getAllByText("CISC 108")).toHaveLength(2);
    expect(screen.getAllByText("CISC 181")).toHaveLength(2);
    expect(screen.getAllByText("CISC 210")).toHaveLength(2);
    expect(screen.getAllByText("CISC 220")).toHaveLength(2);
    expect(screen.getAllByText("CISC 260")).toHaveLength(2);
    expect(screen.getAllByText("CISC 275")).toHaveLength(2);
    expect(screen.getAllByText("CISC 303")).toHaveLength(2);
    expect(screen.getAllByText("CISC 320")).toHaveLength(2);
    expect(screen.getAllByText("CISC 361")).toHaveLength(2);
    expect(screen.getAllByText("CISC 372")).toHaveLength(2);
    expect(screen.getAllByText("MATH 210")).toHaveLength(2);
    expect(screen.getAllByText("MATH 241")).toHaveLength(2);
    expect(screen.getAllByText("MATH 242")).toHaveLength(2);
    expect(screen.getAllByText("CISC 355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL 110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG 101")).toHaveLength(2);
});
test("Group D Req Met", () => {
    render(<App />);
    const addPlanBtn = screen.getByRole("button", { name: /Add New plan/i });
    addPlanBtn.click();
    const idTB = screen.getByRole("textbox", { name: /ID of New Plan:/i });
    userEvent.type(idTB, "Tester-Plan");
    const nameTB = screen.getByRole("textbox", { name: /Name of New Plan/i });
    userEvent.type(nameTB, "Empty Plan");
    const saveChangesBtn = screen.getByRole("button", {
        name: /Save Changes/i
    });
    saveChangesBtn.click();
    //add AFRA215
    const appAddCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddCourse.click();
    const courseCodeTB = screen.getByRole("textbox", { name: /Course Code:/i });
    userEvent.type(courseCodeTB, "{selectall}ANTH 300");
    const modalAddCourse = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalAddCourse[1]);
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(screen.getByText("University Requirement: DLE")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
        )
    ).toBeInTheDocument();
    expect(screen.getByText("MATH205 or MATH350")).toBeInTheDocument();
    expect(screen.getByText("ENGL312 or ENGL410")).toBeInTheDocument();
    expect(
        screen.getByText("Science Sequence Requirement")
    ).toBeInTheDocument();
    expect(
        screen.getByText("4 Credits Additional Science")
    ).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group A")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group B")).toBeInTheDocument();
    expect(screen.getByText("University Breadth: Group C")).toBeInTheDocument();
    expect(
        screen.queryByText("University Breadth: Group D")
    ).not.toBeInTheDocument();
    expect(screen.getByText("124 Credits Needed")).toBeInTheDocument();
    expect(
        screen.getByText(
            "Major Requirement: Tech Electives - CISC301+ (6 credits)"
        )
    ).toBeInTheDocument();
    expect(
        screen.getByText("9 Additional Breadth Credits NOT Group D")
    ).toBeInTheDocument();
    expect(
        screen.getByText("6 Upper Level Breadth Credits (300+)")
    ).toBeInTheDocument();
    //this throws an error because there are multiple ones
    expect(screen.getAllByText("CISC 108")).toHaveLength(2);
    expect(screen.getAllByText("CISC 181")).toHaveLength(2);
    expect(screen.getAllByText("CISC 210")).toHaveLength(2);
    expect(screen.getAllByText("CISC 220")).toHaveLength(2);
    expect(screen.getAllByText("CISC 260")).toHaveLength(2);
    expect(screen.getAllByText("CISC 275")).toHaveLength(2);
    expect(screen.getAllByText("CISC 303")).toHaveLength(2);
    expect(screen.getAllByText("CISC 320")).toHaveLength(2);
    expect(screen.getAllByText("CISC 361")).toHaveLength(2);
    expect(screen.getAllByText("CISC 372")).toHaveLength(2);
    expect(screen.getAllByText("MATH 210")).toHaveLength(2);
    expect(screen.getAllByText("MATH 241")).toHaveLength(2);
    expect(screen.getAllByText("MATH 242")).toHaveLength(2);
    expect(screen.getAllByText("CISC 355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL 110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG 101")).toHaveLength(2);
});
