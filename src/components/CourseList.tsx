import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseAdd } from "./CourseAdd";
import { CourseView } from "./CourseView";

/**
 * Returns a table that displays all of the courses in a single semester
 * This function updates the list of courses in a semester when needed and calls CourseView to display changes
 */
export function CourseList({ semester, planId, updateCoursePlan }: { semester: Semester; planId: string; updateCoursePlan: (planId: string, semesterId: string; newCourse: Course) => Plan[] }): JSX.Element {
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

    function clearCourses() {
        setCourses([]);
    }

    function deleteCourse(id: string) {
        setCourses(
            courses.filter((course: Course): boolean => course.code !== id)
        );
    }
    function addCourse(newCourse: Course): void {
        setCourses([...courses, newCourse]);
    }

    return (
        <div>
            <CourseView
                courses={courses}
                editCourse={editCourse}
                deleteCourse={deleteCourse}
            ></CourseView>
            <CourseAdd
                planId={planId}
                semesterId={semester.id}
                addCourse={addCourse}
                updateCoursePlan={updateCoursePlan}
            ></CourseAdd>
            <Button variant="danger" onClick={clearCourses}>
                Clear All Courses
            </Button>
        </div>
    );
}
