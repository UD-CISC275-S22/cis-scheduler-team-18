import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Course } from "../interfaces/course";

export function CourseAdd({
    editCourse
}: {
    editCourse: (newCourse: Course) => void;
}): JSX.Element {
    //use state for each element needed to make a new course
    const [code, setCode] = useState("NEW101");
    const [title, setTitle] = useState("NEW COURSE");
    const [credits, setCredits] = useState(0);
    const [required, setRequired] = useState(false);
    const [isPreReq, setIsPreReq] = useState(false);
    const [hasPreReq, setHasPreReq] = useState(false);
    const [show, setShow] = useState(false);

    //update functions
    function addCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
    }
    function addTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    function addCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(parseInt(event.target.value));
    }
    function swapRequired(event: React.ChangeEvent<HTMLInputElement>) {
        setRequired(!required);
    }
    function swapIsPreReq(event: React.ChangeEvent<HTMLInputElement>) {
        setIsPreReq(!isPreReq);
    }
    function swapHasPreReq(event: React.ChangeEvent<HTMLInputElement>) {
        setHasPreReq(!hasPreReq);
    }
    //this function creates a new Course with the current given information and puts it in the course list
    function makeCourse() {
        const newCourse: Course = {
            id: code,
            courseName: code,
            courseTitle: title,
            credits: credits,
            required: required,
            preReq: isPreReq,
            preReqRequired: hasPreReq,
            preReqTo: "",
            requiredPreReq: "",
            option: false,
            optionTo: ""
        };
        editCourse(newCourse);
    }
    //for Modal
    const close = () => setShow(false);
    const open = () => setShow(true);
    return (
        <div>
            <Button variant="Success" onClick={open}>
                Add New Course
            </Button>
        </div>
    );
}
