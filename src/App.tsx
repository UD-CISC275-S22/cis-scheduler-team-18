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

//to load between pages
let loadedData = PLANS;

//unique data key
const saveDataKey = "TEAM-18-PAGE-DATA";

const previousData = localStorage.getItem(saveDataKey);

if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

function App(): JSX.Element {
    //const plans = PLANS;
    const [plans, setPlans] = useState<Plan[]>(PLANS);
    const [showAddModal, setShowAddModal] = useState(false);
    const [data, setData] = useState<Plan[]>(loadedData);

    //this will save all the made changes
    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(data));
    }

    function editPlan(id: string, newPlan: Plan) {
        setPlans(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
        setData(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
    }

    function deletePlan(id: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
        setData(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.id === newPlan.id
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
            setData([...data, newPlan]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    //mimicking Tome example to implement
    function updateSemesterPlan(planId: string, newSemester: Semester) {
        //will update "plans" when a new semester is added
        const addedSem = plans.map(
            (plan: Plan): Plan =>
                plan.id === planId
                    ? { ...plan, semesters: [...plan.semesters, newSemester] }
                    : { ...plan }
        );

        setPlans(addedSem);
        setData(addedSem);
    }

    function updateCoursePlan(
        //will update "plans" when a new course is added
        planID: string,
        semesterId: string,
        newCourse: Course
    ) {
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
        setData(updatePlan);
    }

    function updateEditedSemester(
        //will update "plans", when a semester is edited
        planId: string,
        semId: string,
        newSeason: string,
        newYear: number
    ) {
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
        setData(updatePlan);
    }

    function updateEditedCourse(
        //will update 'plans' when a course is edited
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ) {
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
                const newCourse: Course = {
                    code: newCode,
                    name: newName,
                    credits: newCredits,
                    descr: "",
                    preReq: "",
                    restrict: "",
                    breadth: "",
                    typ: ""
                };
                //add edited fields to the course
                const editedCourse = currCourses.map(
                    (course: Course): Course =>
                        course.code === courseCode ? newCourse : { ...course }
                );

                //find the course
                const findCourse = currCourses.find(
                    (course: Course): boolean => course.code === courseCode
                );

                let deletedCourse: Course[];

                let updateSemester: Semester[];

                //update a deleted course
                if (findCourse === undefined) {
                    deletedCourse = currCourses.filter(
                        (course: Course): boolean => course.code !== courseCode
                    );

                    updateSemester = currPlan.semesters.map(
                        (sem: Semester): Semester =>
                            sem.id === semId
                                ? { ...sem, courses: deletedCourse }
                                : { ...sem }
                    );
                } else {
                    updateSemester = currPlan.semesters.map(
                        (sem: Semester): Semester =>
                            sem.id === semId
                                ? { ...sem, courses: editedCourse }
                                : { ...sem }
                    );
                }

                updatePlan = plans.map(
                    (plan: Plan): Plan =>
                        plan.id === planId
                            ? { ...plan, semesters: updateSemester }
                            : { ...plan }
                );
            }
        }

        setPlans(updatePlan);
        setData(updatePlan);
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
            <Button onClick={saveData}>Save all Changes</Button>
            <div>
                <PlanList
                    updateSemesterPlan={updateSemesterPlan}
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                    updateCoursePlan={updateCoursePlan}
                    updateEditedCourse={updateEditedCourse}
                    updateEditedSemester={updateEditedSemester}
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
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                ></AddPlanModal>
            </div>
            <div>
                <Drag></Drag>
            </div>
        </div>
    );
}

export default App;
