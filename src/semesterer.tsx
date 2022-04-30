//App: Plan
//Semesterer: Semester
import React, { useState } from "react";
import { Semester } from "./interfaces/semester";
import { Plan } from "./interfaces/plan";
import { SemesterList } from "./components/semesterList";
import { Button } from "react-bootstrap";
import { AddSemesterModal } from "./components/addSemesterModal";
import { Course } from "./interfaces/course";

export function Semesterer({
    plan,
    updateSemesterPlan,
    updateCoursePlan
}: {
    plan: Plan;
    updateSemesterPlan: (planId: string, newSemester: Semester) => Plan[];
    updateCoursePlan: (
        planId: string,
        semesterId: string,
        newCourse: Course
    ) => Plan[];
}): JSX.Element {
    //list of degree requirements: base plan, cs BS major

    //list of semesters
    const sems = plan.semesters.map((sem: Semester) => ({ ...sem }));
    //the useState for the semesters so that everything will stay changed
    const [semesters, setSemesters] = useState<Semester[]>(sems);
    const [showAddModal, setShowAddModal] = useState(false);

    //editSemesters function
    function editSemester(id: string, newSemester: Semester) {
        setSemesters(
            semesters.map(
                (semester: Semester): Semester =>
                    semester.id === id ? newSemester : semester
            )
        );
    }

    //deleteSemester function
    function deleteSemester(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
    }

    //will add a new semester
    function addSemester(newSemester: Semester) {
        const existing = semesters.find(
            (sem: Semester): boolean => sem.id === newSemester.id
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }
    }

    function clearSemesters(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id === id
            )
        );
    }

    //will generate the pop up box in the case that we were adding a semester
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    //will call semesterList
    return (
        <div>
            <div>
                <SemesterList
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                    updateCoursePlan={updateCoursePlan}
                    planId={plan.id}
                ></SemesterList>
            </div>
            <div>
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={() =>
                        clearSemesters("4da3fa04-5724-4223-a8ba-40f4a296b3b3")
                    }
                >
                    Clear All Semesters
                </Button>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add Semester
                </Button>
                <AddSemesterModal
                    planId={plan.id}
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addSemester={addSemester}
                    updateSemesterPlan={updateSemesterPlan}
                ></AddSemesterModal>
            </div>
        </div>
    );
}
