import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Semester } from "../interfaces/semester";
import { CourseView } from "./CourseView";

export interface CourseListProps {
    courses: Course[];
    editCourse: (id: string, newCourse: Course) => void;
    deleteCourse: (id: string) => void;
}
/**
 * Creates a table that is a list of courses (AKA a single semester)
 */
export function CourseList({ semester }: { semester: Semester }): JSX.Element {
    const [courses, setCourses] = useState<Course[]>([...semester.courses]);
    function editCourse(id: string, newCourse: Course): void {
        setCourses(
            courses.map((course: Course) =>
                course.id === id ? newCourse : course
            )
        );
    }

    /*
    function deleteCourse(id: string) {
        setCourses(
            courses.filter((course: Course): boolean => course.id !== id)
        );
    }*/

    return (
        <div>
            <CourseView courses={courses} editCourse={editCourse}></CourseView>
        </div>
    );
}
