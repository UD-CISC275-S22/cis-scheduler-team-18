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
    expect(screen.getAllByText("CISC108")).toHaveLength(2);
    expect(screen.getAllByText("CISC181")).toHaveLength(2);
    expect(screen.getAllByText("CISC210")).toHaveLength(2);
    expect(screen.getAllByText("CISC220")).toHaveLength(2);
    expect(screen.getAllByText("CISC260")).toHaveLength(2);
    expect(screen.getAllByText("CISC275")).toHaveLength(2);
    expect(screen.getAllByText("CISC303")).toHaveLength(2);
    expect(screen.getAllByText("CISC320")).toHaveLength(2);
    expect(screen.getAllByText("CISC361")).toHaveLength(2);
    expect(screen.getAllByText("CISC372")).toHaveLength(2);
    expect(screen.getAllByText("MATH210")).toHaveLength(2);
    expect(screen.getAllByText("MATH241")).toHaveLength(2);
    expect(screen.getAllByText("MATH242")).toHaveLength(2);
    expect(screen.getAllByText("CISC355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG101")).toHaveLength(2);
});
test("Capstone Requirement", () => {
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
    const appAddNewCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddNewCourse.click();
    const courseCodeTB = screen.getByRole("textbox", {
        name: /Course Code:/i
    });
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC498");
    const modalSaveChanges = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalSaveChanges[1]);
    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC499");
    userEvent.click(modalSaveChanges[1]);
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(screen.getByText("University Requirement: DLE")).toBeInTheDocument();
    expect(
        screen.queryByText(
            "Capstone Requirement: CISC498 and CISC499 or UNIV401 and UNIV402"
        )
    ).not.toBeInTheDocument();
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
    expect(screen.getAllByText("CISC108")).toHaveLength(2);
    expect(screen.getAllByText("CISC181")).toHaveLength(2);
    expect(screen.getAllByText("CISC210")).toHaveLength(2);
    expect(screen.getAllByText("CISC220")).toHaveLength(2);
    expect(screen.getAllByText("CISC260")).toHaveLength(2);
    expect(screen.getAllByText("CISC275")).toHaveLength(2);
    expect(screen.getAllByText("CISC303")).toHaveLength(2);
    expect(screen.getAllByText("CISC320")).toHaveLength(2);
    expect(screen.getAllByText("CISC361")).toHaveLength(2);
    expect(screen.getAllByText("CISC372")).toHaveLength(2);
    expect(screen.getAllByText("MATH210")).toHaveLength(2);
    expect(screen.getAllByText("MATH241")).toHaveLength(2);
    expect(screen.getAllByText("MATH242")).toHaveLength(2);
    expect(screen.getAllByText("CISC355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG101")).toHaveLength(2);
});
test("DLE Requirement", () => {
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
    const appAddNewCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddNewCourse.click();
    const courseCodeTB = screen.getByRole("textbox", {
        name: /Course Code:/i
    });
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "COMM 326");
    const modalSaveChanges = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalSaveChanges[1]);
    expect(
        screen.getByText("University Requirement: Multicultural")
    ).toBeInTheDocument();
    expect(
        screen.queryByText("University Requirement: DLE")
    ).not.toBeInTheDocument();
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
    expect(screen.getAllByText("CISC108")).toHaveLength(2);
    expect(screen.getAllByText("CISC181")).toHaveLength(2);
    expect(screen.getAllByText("CISC210")).toHaveLength(2);
    expect(screen.getAllByText("CISC220")).toHaveLength(2);
    expect(screen.getAllByText("CISC260")).toHaveLength(2);
    expect(screen.getAllByText("CISC275")).toHaveLength(2);
    expect(screen.getAllByText("CISC303")).toHaveLength(2);
    expect(screen.getAllByText("CISC320")).toHaveLength(2);
    expect(screen.getAllByText("CISC361")).toHaveLength(2);
    expect(screen.getAllByText("CISC372")).toHaveLength(2);
    expect(screen.getAllByText("MATH210")).toHaveLength(2);
    expect(screen.getAllByText("MATH241")).toHaveLength(2);
    expect(screen.getAllByText("MATH242")).toHaveLength(2);
    expect(screen.getAllByText("CISC355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG101")).toHaveLength(2);
});
test("MultiCultural Requirement", () => {
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
    const appAddNewCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddNewCourse.click();
    const courseCodeTB = screen.getByRole("textbox", {
        name: /Course Code:/i
    });
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "AFRA205");
    const modalSaveChanges = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalSaveChanges[1]);
    expect(
        screen.queryByText("University Requirement: Multicultural")
    ).not.toBeInTheDocument();
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
    expect(screen.getAllByText("CISC108")).toHaveLength(2);
    expect(screen.getAllByText("CISC181")).toHaveLength(2);
    expect(screen.getAllByText("CISC210")).toHaveLength(2);
    expect(screen.getAllByText("CISC220")).toHaveLength(2);
    expect(screen.getAllByText("CISC260")).toHaveLength(2);
    expect(screen.getAllByText("CISC275")).toHaveLength(2);
    expect(screen.getAllByText("CISC303")).toHaveLength(2);
    expect(screen.getAllByText("CISC320")).toHaveLength(2);
    expect(screen.getAllByText("CISC361")).toHaveLength(2);
    expect(screen.getAllByText("CISC372")).toHaveLength(2);
    expect(screen.getAllByText("MATH210")).toHaveLength(2);
    expect(screen.getAllByText("MATH241")).toHaveLength(2);
    expect(screen.getAllByText("MATH242")).toHaveLength(2);
    expect(screen.getAllByText("CISC355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG101")).toHaveLength(2);
});
test("Check Core Requirements", () => {
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
    const appAddNewCourse = screen.getByRole("button", {
        name: /Add New Course/i
    });
    appAddNewCourse.click();
    const courseCodeTB = screen.getByRole("textbox", {
        name: /Course Code:/i
    });
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC108");
    const modalSaveChanges = screen.getAllByRole("button", {
        name: /Add New Course/i
    });
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC181");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC210");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC220");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC260");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC275");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC303");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC320");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC361");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC372");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "MATH210");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "MATH241");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "MATH242");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "ENGL110");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "EGGG101");
    userEvent.click(modalSaveChanges[1]);

    appAddNewCourse.click();
    userEvent.clear(courseCodeTB);
    userEvent.type(courseCodeTB, "CISC355");
    userEvent.click(modalSaveChanges[1]);
    expect(
        screen.queryByText("University Requirement: Multicultural")
    ).not.toBeInTheDocument();
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
    expect(screen.getAllByText("CISC108")).toHaveLength(2);
    expect(screen.getAllByText("CISC181")).toHaveLength(2);
    expect(screen.getAllByText("CISC210")).toHaveLength(2);
    expect(screen.getAllByText("CISC220")).toHaveLength(2);
    expect(screen.getAllByText("CISC260")).toHaveLength(2);
    expect(screen.getAllByText("CISC275")).toHaveLength(2);
    expect(screen.getAllByText("CISC303")).toHaveLength(2);
    expect(screen.getAllByText("CISC320")).toHaveLength(2);
    expect(screen.getAllByText("CISC361")).toHaveLength(2);
    expect(screen.getAllByText("CISC372")).toHaveLength(2);
    expect(screen.getAllByText("MATH210")).toHaveLength(2);
    expect(screen.getAllByText("MATH241")).toHaveLength(2);
    expect(screen.getAllByText("MATH242")).toHaveLength(2);
    expect(screen.getAllByText("CISC355")).toHaveLength(2);
    expect(screen.getAllByText("ENGL110")).toHaveLength(2);
    expect(screen.getAllByText("EGGG101")).toHaveLength(2);
});