import React, { useState } from "react";
import "./App.css";

import semesterPlan from "./data/semesterPlan.json";
import { Plan } from "./interfaces/plan";
import { PlanList } from "./components/PlanList";
import { Welcome } from "./WelcomeMsg";
import { Button } from "react-bootstrap";
import { AddPlanModal } from "./components/AddPlanModal";
import { Drag } from "./components/Drag";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";

const PLANS = semesterPlan.map(
    (plan: Plan): Plan => ({
        ...plan
    })
);

function App(): JSX.Element {
    //const plans = PLANS;
    const [plans, setPlans] = useState<Plan[]>(PLANS);
    const [showAddModal, setShowAddModal] = useState(false);

    function editPlan(id: string, newPlan: Plan) {
        setPlans(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
    }

    function deletePlan(id: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.id === newPlan.id
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    //mimicking Tome example to implement
    //don't think I'll necessarily need this one
    function updatePlan(plans: Plan[], newPlan: Plan): Plan[] {
        //adds the new plan to plans
        //implement this with a button by using the lambda function:
        //() => setPlans(addPlan(plans, newPlan))
        setPlans([...plans, newPlan]);
        return [...plans, newPlan];
    }

    function updateSemesterPlan(planId: string, newSemester: Semester): Plan[] {
        const addedSem = plans.map(
            (plan: Plan): Plan =>
                plan.id === planId
                    ? { ...plan, semesters: [...plan.semesters, newSemester] }
                    : { ...plan }
        );

        setPlans(addedSem);

        return addedSem;
    }

    function updateCoursePlan(
        planID: string,
        semesterId: string,
        newCourse: Course
    ): Plan[] {
        //maybe: map through the plans, to find the semester
        //first, find the plan, then map through the plan's semesters
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === planID
        );

        let updatePlan = { ...plans };
        //get the semesters
        if (currPlan !== undefined) {
            const currSems = currPlan.semesters.map(
                (sem: Semester): Semester => sem
            );

            //add the course to the list of semesters
            const addedCourse = currSems.map(
                (sem: Semester): Semester =>
                    sem.id === semesterId
                        ? { ...sem, courses: [...sem.courses, newCourse] }
                        : { ...sem }
            );

            updatePlan = plans.map(
                (plan: Plan): Plan =>
                    plan.id === planID
                        ? { ...plan, semesters: addedCourse }
                        : { ...plan }
            );
        }

        setPlans(updatePlan);

        return updatePlan;
    }

    function updateEditedSemester(
        planId: string,
        semId: string,
        newSeason: string,
        newYear: number
    ): Plan[] {
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === planId
        );

        let updatePlan = { ...plans };

        if (currPlan !== undefined) {
            const currSems = currPlan.semesters.map(
                (sem: Semester): Semester => sem
            );

            //add the edited fields to semester
            const editedSem = currSems.map(
                (sem: Semester): Semester =>
                    sem.id === semId
                        ? { ...sem, season: newSeason, year: newYear }
                        : { ...sem }
            );

            updatePlan = plans.map(
                (plan: Plan): Plan =>
                    plan.id === planId
                        ? { ...plan, semesters: editedSem }
                        : { ...plan }
            );
        }

        setPlans(updatePlan);

        return updatePlan;
    }

    function updateEditedCourse(
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ): Plan[] {
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === planId
        );

        let updatePlan = { ...plans };

        if (currPlan !== undefined) {
            const currSem = currPlan.semesters.find(
                (sem: Semester): boolean => sem.id === semId
            );

            if (currSem !== undefined) {
                const currCourses = currSem.courses.map(
                    (course: Course): Course => course
                );

                //add edited fields to the course
                const editedCourse = currCourses.map(
                    (course: Course): Course =>
                        course.code === courseCode
                            ? { ...course, code: newCode, name: newName }
                            : { ...course }
                );

                const updateSemester = currPlan.semesters.map(
                    (sem: Semester): Semester =>
                        sem.id === semId
                            ? { ...sem, courses: editedCourse }
                            : { ...sem }
                );

                updatePlan = plans.map(
                    (plan: Plan): Plan =>
                        plan.id === planId
                            ? { ...plan, semesters: updateSemester }
                            : { ...plan }
                );
            }
        }

        setPlans(updatePlan);

        return updatePlan;
    }

    /** Add this later*/
    /*
<PlanList
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                ></PlanList>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Plan
                </Button>
*/

    return (
        <div className="App">
            <header className="App-header">Team 18 Page</header>
            <div>
                <Welcome></Welcome>
            </div>
            <div>
                <PlanList
                    updateSemesterPlan={updateSemesterPlan}
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                    updateCoursePlan={updateCoursePlan}
                ></PlanList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Plan
                </Button>
                <AddPlanModal
                    plans={plans}
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                    updatePlan={updatePlan}
                ></AddPlanModal>
            </div>
            <div>
                <Drag></Drag>
            </div>
        </div>
    );
}

export default App;
