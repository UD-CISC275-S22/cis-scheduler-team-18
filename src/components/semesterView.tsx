import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterEditor } from "../components/semesterEditor";
import { MultipleSemesterTable } from "../components/multipleSemesterTable";
//import { CourseList } from "./CourseList";
import "../styleSheets/multipleSemesterTable.css";

export function SemesterView({
    semester,
    editSemester,
    deleteSemester
}: {
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    //determines whether we're in editing mode for semesters
    const [editing, setEditing] = useState<boolean>(false);

    //will update the usestate editing
    function changeSemesterEditing() {
        setEditing(!editing);
    }

    //if in editing mode, will call semesterEditor
    //else, will call semesterTable which will pass in a single semester - this is okay becuase semesterLIST is already mapping
    //through a list of semesters, meaning we don't have to pass in a whole plan or list of semesters
    //add edit semester button
    return editing ? (
        <div>
            <SemesterEditor
                show={editing}
                changeSemesterEditing={changeSemesterEditing}
                semester={semester}
                editSemester={editSemester}
                deleteSemester={deleteSemester}
            ></SemesterEditor>
        </div>
    ) : (
        <div>
            <MultipleSemesterTable semester={semester}></MultipleSemesterTable>
            <div>
                <Button variant="info" onClick={changeSemesterEditing}>
                    Edit Semester
                </Button>
            </div>
        </div>
    );
}
