import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseAdd } from "./CourseAdd";
import { CourseView } from "./CourseView";

/**
 * Returns a table that displays all of the courses in a single semester
 * This function updates the list of courses in a semester when needed and calls CourseView to display changes
 */
export function CourseList({ semester }: { semester: Semester }): JSX.Element {
    const [courses, setCourses] = useState<Course[]>([...semester.courses]);
    /*
    Function updates the list of courses to include the changes that the user made in CourseEdit
    */
    function editCourse(id: string, newCourse: Course): void {
        setCourses(
            courses.map((course: Course) =>
                course.id === id ? newCourse : course
            )
        );
    }

    function deleteCourse(id: string) {
        setCourses(
            courses.filter((course: Course): boolean => course.id !== id)
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
            <CourseAdd addCourse={addCourse}></CourseAdd>
        </div>
    );
}
