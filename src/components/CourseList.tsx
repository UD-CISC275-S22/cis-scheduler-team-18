import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseAdd } from "./CourseAdd";
import { CourseView } from "./CourseView";
import { Plan } from "../interfaces/plan";

/**
 * Returns a table that displays all of the courses in a single semester
 * This function updates the list of courses in a semester when needed and calls CourseView to display changes
 */
export function CourseList({
    semester,
    plan,
    plans,
    setPlans,
    setSemesters
}: {
    semester: Semester;
    plan: Plan;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
    setSemesters: (s: Semester[]) => void;
}): JSX.Element {
    const [courses, setCourses] = useState<Course[]>([...semester.courses]);
    /*
    Function updates the list of courses to include the changes that the user made in CourseEdit
    */
    function editCourse(id: string, newCourse: Course): void {
        setCourses(
            courses.map((course: Course) =>
                course.code === id ? newCourse : course
            )
        );
    }

    function deleteCourse(id: string) {
        setCourses(
            courses.filter((course: Course): boolean => course.code !== id)
        );
        const currPlan = plans.find(
            (Plan: Plan): boolean => Plan.id === plan.id
        );
        let updatePlan = { ...plans };
        if (currPlan !== undefined) {
            const currSem = currPlan.semesters.find(
                (sem: Semester): boolean => sem.id === sem.id
            );
            if (currSem !== undefined) {
                const currCourses = currSem.courses.map(
                    (course: Course): Course => course
                );
                const deletedCourse = currCourses.filter(
                    (course: Course): boolean => course.code !== id
                );
                const updateSemester = currPlan.semesters.map(
                    (sem: Semester): Semester =>
                        sem.id === sem.id
                            ? { ...sem, courses: deletedCourse }
                            : { ...sem }
                );
                updatePlan = plans.map(
                    (plan: Plan): Plan =>
                        plan.id === plan.id
                            ? { ...plan, semesters: updateSemester }
                            : { ...plan }
                );
            }
        }
        setPlans(updatePlan);
    }

    function clearCourses() {
        setCourses([]);
        updateClearCourses(plan.id, semester.id);
    }

    function addCourse(newCourse: Course): void {
        setCourses([...courses, newCourse]);
    }

    function updateClearCourses(planId: string, semId: string) {
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === planId
        );
        let updatePlan = { ...plans };
        if (currPlan !== undefined) {
            const currSem = currPlan.semesters.find(
                (sem: Semester): boolean => sem.id === semId
            );
            if (currSem !== undefined) {
                const emptyCourses = currPlan.semesters.map(
                    (sem: Semester): Semester =>
                        sem.id === semId ? { ...sem, courses: [] } : { ...sem }
                );
                updatePlan = plans.map(
                    (plan: Plan): Plan =>
                        plan.id === planId
                            ? { ...plan, semesters: emptyCourses }
                            : { ...plan }
                );
            }
        }
        setPlans(updatePlan);
    }

    function updateDelPlans(planId: string, semId: string, courseCode: string) {
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
                const deletedCourse = currCourses.filter(
                    (course: Course): boolean => course.code !== courseCode
                );
                const updateSemester = currPlan.semesters.map(
                    (sem: Semester): Semester =>
                        sem.id === semId
                            ? { ...sem, courses: deletedCourse }
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
    }
    return (
        <div>
            <CourseView
                planId={plan.id}
                semId={semester.id}
                courses={courses}
                editCourse={editCourse}
                deleteCourse={deleteCourse}
                addCourse={addCourse}
                plans={plans}
                setPlans={setPlans}
                setSemesters={setSemesters}
            ></CourseView>
            <CourseAdd
                plan={plan}
                semesterId={semester.id}
                addCourse={addCourse}
                plans={plans}
                setPlans={setPlans}
            ></CourseAdd>
            <Button variant="danger" onClick={clearCourses}>
                Clear All Courses
            </Button>
        </div>
    );
}
