import React from "react";
import { Stack } from "react-bootstrap";
import { Plan } from "./interfaces/plan";
import { Semester } from "./interfaces/semester";
import { Course } from "./interfaces/course";

export function MultipleSemesterCourses({ plan }: { plan: Plan }): JSX.Element {
    return (
        <table>
            <thead>
                <tr>
                    <td>This is the title</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>This is the Body</td>
                </tr>
            </tbody>
        </table>

    );
}