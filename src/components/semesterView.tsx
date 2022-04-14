import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterEditor } from "../components/semesterEditor";
import { MultipleSemesterTable } from "../components/multipleSemesterTable";

export function SemesterView({
    semester,
    editSemester,
    deleteSemester
}: {
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
}): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);

    function changeSemesterEditing() {
        setEditing(!editing);
    }

    return editing ? (
        <div>
            <SemesterEditor
                changeSemesterEditing={changeSemesterEditing}
                semester={semester}
                editSemester={editSemester}
                deleteSemester={deleteSemester}
            ></SemesterEditor>
        </div>
    ) : (
        <div>
            <div>
                <MultipleSemesterTable
                    semester={semester}
                ></MultipleSemesterTable>
            </div>
            <div>
                <Button variant="info" onClick={changeSemesterEditing}>
                    Edit Semester
                </Button>
            </div>
        </div>
    );
}
