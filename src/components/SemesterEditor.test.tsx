//you can edit semester season + year
//you can delete semester
//you can save changes
//you can cancel (not save changes)
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { SemesterEditor } from "./semesterEditor";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<SemesterEditor />);
    });
});

}

