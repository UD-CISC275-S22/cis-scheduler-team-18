import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Semester } from "../interfaces/semester";
import { SemesterEditor } from "./semesterEditor";
import { MultipleSemesterTable } from "./multipleSemesterTable";
import "../styleSheets/multipleSemesterTable.css";
import { Plan } from "../interfaces/plan";

export function SemesterView({
    semester,
    editSemester,
    deleteSemester,
    plan,
    plans,
    setPlans,
    setSemesters,
    setData
}: {
    semester: Semester;
    editSemester: (id: string, newSemester: Semester) => void;
    deleteSemester: (id: string) => void;
    plan: Plan;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
    setSemesters: (s: Semester[]) => void;
    setData: (d: Plan[]) => void;
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
            <MultipleSemesterTable
                plans={plans}
                setPlans={setPlans}
                plan={plan}
                semester={semester}
                setSemesters={setSemesters}
                setData={setData}
            ></MultipleSemesterTable>
            <div>
                <Button
                    variant="info"
                    className="m-1"
                    onClick={changeSemesterEditing}
                >
                    Edit Semester
                </Button>
            </div>
        </div>
    );
}
