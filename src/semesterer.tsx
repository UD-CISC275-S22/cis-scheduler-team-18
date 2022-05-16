import React, { useState } from "react";
import { Semester } from "./interfaces/semester";
import { Plan } from "./interfaces/plan";
import { SemesterList } from "./components/semesterList";
import { Button } from "react-bootstrap";
import { AddSemesterModal } from "./components/addSemesterModal";
import "./styleSheets/plan.css";

export function Semesterer({
    plan,
    plans,
    setPlans,
    setData
}: {
    plan: Plan;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
    setData: (d: Plan[]) => void;
}): JSX.Element {
    //list of degree requirements: base plan, cs BS major

    //list of semesters
    const sems = plan.semesters.map((sem: Semester) => ({ ...sem }));
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
        const edit = plan.semesters.map(
            (semester: Semester): Semester =>
                semester.id === id ? newSemester : semester
        );
        const editedSem = plans.map(
            (PLAN: Plan): Plan =>
                plan.id === PLAN.id ? { ...PLAN, semesters: edit } : { ...PLAN }
        );
        setPlans(editedSem);
        setData(editedSem);
    }

    //deleteSemester function
    function deleteSemester(id: string) {
        setSemesters(
            semesters.filter(
                (semester: Semester): boolean => semester.id !== id
            )
        );
        const deletedSem = plan.semesters.filter(
            (sem: Semester): boolean => sem.id !== id
        );
        const delPlan = plans.map(
            (PLAN: Plan): Plan =>
                plan.id === PLAN.id
                    ? { ...PLAN, semesters: deletedSem }
                    : { ...PLAN }
        );
        setPlans(delPlan);
        setData(delPlan);
    }

    //will add a new semester
    function addSemester(newSemester: Semester) {
        const existing = semesters.find(
            (sem: Semester): boolean => sem.id === newSemester.id
        );
        if (existing === undefined) {
            setSemesters([...semesters, newSemester]);
        }

        const addedSem = plans.map(
            (PLAN: Plan): Plan =>
                plan.id === PLAN.id
                    ? { ...PLAN, semesters: [...PLAN.semesters, newSemester] }
                    : { ...PLAN }
        );
        setPlans(addedSem);
        setData(addedSem);
    }

    function clearSemesters() {
        setSemesters([]);
        const currPlan = plans.find(
            (PLAN: Plan): boolean => PLAN.id === plan.id
        );
        let updatePlan = { ...plans };
        if (currPlan !== undefined) {
            updatePlan = plans.map(
                (PLAN: Plan): Plan =>
                    PLAN.id === plan.id
                        ? { ...PLAN, semesters: [] }
                        : { ...PLAN }
            );
        }
        setPlans(updatePlan);
        setData(updatePlan);
    }
    //will generate the pop up box in the case that we were adding a semester
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    //will call semesterList
    return (
        <div className="mySems">
            <div className="mySemList">
                <SemesterList
                    plans={plans}
                    setPlans={setPlans}
                    semesters={semesters}
                    editSemester={editSemester}
                    deleteSemester={deleteSemester}
                    plan={plan}
                    setSemesters={setSemesters}
                    setData={setData}
                ></SemesterList>
            </div>
            <div>
                <Button
                    variant="danger"
                    className="m-4"
                    onClick={() => clearSemesters()}
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
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addSemester={addSemester}
                ></AddSemesterModal>
            </div>
        </div>
    );
}
