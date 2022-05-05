//add semester button
//semester ID
//season
//year
//close
//save changes
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { AddSemesterModal } from "./addSemesterModal";
import userEvent from "@testing-library/user-event";

describe("MultipleSemester Component tests", () => {
    beforeEach(() => {
        render(<AddSemesterModal />);
    });
});
