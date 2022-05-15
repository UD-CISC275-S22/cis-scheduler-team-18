import React from "react";
import { Stack } from "react-bootstrap";
import { Plan } from "../interfaces/plan";
import { PlanView } from "./PlanView";
import { Semester } from "../interfaces/semester";
import { Course } from "../interfaces/course";

export function PlanList({
    plans,
    deletePlan,
    editPlan,
    updateSemesterPlan,
    updateCoursePlan,
    updateEditedCourse,
    updateEditedSemester,
    updateDeletedCourse
}: {
    plans: Plan[];
    deletePlan: (id: string) => void;
    editPlan: (id: string, newPlan: Plan) => void;
    updateSemesterPlan: (planId: string, newSemester: Semester) => void;
    updateEditedCourse: (
        planId: string,
        semId: string,
        courseCode: string,
        newCode: string,
        newName: string,
        newCredits: string
    ) => void;
    updateEditedSemester: (
        planId: string,
        semId: string,
        newSeason: string,
        newYear: number
    ) => void;
    updateCoursePlan: (
        planId: string,
        semesterId: string,
        newCourse: Course
    ) => void;
    updateDeletedCourse: (
        planId: string,
        semId: string,
        courseCode: string
    ) => void;
}): JSX.Element {
    //make sure the plans stay in a nice format
    //calls PlanView which will determine if we're in editing mode
    return (
        <Stack gap={3} data-testid="PlanListTest">
            {plans.map((plan: Plan) => (
                <div key={plan.id} className="bg-light border m-2 p-2">
                    <PlanView
                        updateSemesterPlan={updateSemesterPlan}
                        plan={plan}
                        editPlan={editPlan}
                        deletePlan={deletePlan}
                        updateCoursePlan={updateCoursePlan}
                        updateEditedSemester={updateEditedSemester}
                        updateEditedCourse={updateEditedCourse}
                        updateDeletedCourse={updateDeletedCourse}
                    ></PlanView>
                </div>
            ))}
        </Stack>
    );
}
