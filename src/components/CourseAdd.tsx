import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Course } from "../interfaces/Course";
import catalog from "../data/Catalog.json";
import { Semester } from "../interfaces/Semester";
import { Plan } from "../interfaces/Plan";
//import { Semester } from "../interfaces/semester";

export function CourseAdd({
    addCourse,
    plan,
    semesterId,
    plans,
    setPlans
}: {
    addCourse: (newCourse: Course) => void;
    plan: Plan;
    semesterId: string;
    plans: Plan[];
    setPlans: (p: Plan[]) => void;
}): JSX.Element {
    //use state for each element needed to make a new course
    const [code, setCode] = useState("NEW101");
    const [title, setTitle] = useState("NEW COURSE");
    const [credits, setCredits] = useState("0");
    const [isPreReq, setIsPreReq] = useState("");
    const [show, setShow] = useState(false);

    //update functions
    function addCode(event: React.ChangeEvent<HTMLInputElement>) {
        setCode(event.target.value);
        const found = findCourse(event.target.value);
        if (found !== undefined) {
            setTitle(found.name);
            setCredits(found.credits);
            setIsPreReq(found.preReq);
        }
    }
    function addTitle(event: React.ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value);
    }
    function addCredits(event: React.ChangeEvent<HTMLInputElement>) {
        setCredits(event.target.value);
    }
    function addIsPreReq(event: React.ChangeEvent<HTMLInputElement>) {
        setIsPreReq(event.target.value);
    }
    //this function creates a new Course with the current given information and puts it in the course list
    function makeCourse() {
        let newCourse: Course;
        const found = findCourse(code);
        if (found !== undefined) {
            newCourse = {
                code: found.code,
                name: found.name,
                descr: found.descr,
                credits: found.credits,
                preReq: found.preReq,
                restrict: found.restrict,
                breadth: found.breadth,
                typ: found.typ
            };
        } else {
            newCourse = {
                code: code,
                name: title,
                descr: "",
                credits: credits,
                preReq: isPreReq,
                restrict: "",
                breadth: "",
                typ: ""
            };
        }
        addCourse(newCourse);
        updatePlans(plan, semesterId, {
            code: code,
            name: title,
            descr: "",
            credits: credits,
            preReq: isPreReq,
            restrict: "",
            breadth: "",
            typ: ""
        });
        close();
    }

    function updatePlans(PLAN: Plan, semId: string, newCourse: Course) {
        const currPlan = plans.find(
            (plan: Plan): boolean => plan.id === PLAN.id
        );

        let updatePlan = { ...plans };

        if (currPlan !== undefined) {
            const currSems = currPlan.semesters.map(
                (sem: Semester): Semester => sem
            );

            const addedCourse = currSems.map(
                (sem: Semester): Semester =>
                    sem.id === semId
                        ? { ...sem, courses: [...sem.courses, newCourse] }
                        : { ...sem }
            );

            updatePlan = plans.map(
                (plan: Plan): Plan =>
                    plan.id === PLAN.id
                        ? { ...plan, semesters: addedCourse }
                        : { ...plan }
            );
        }

        setPlans(updatePlan);
    }
    //gets course information from catalog based on a course id
    function findCourse(id: string) {
        const codeArr = Array.from(id);
        const letterCodeArr = codeArr.filter(
            (str: string): boolean => isNaN(parseInt(str)) && str !== " "
        );
        const numCodeArr = codeArr.filter(
            (str: string): boolean => !isNaN(parseInt(str))
        );
        const letterCode = letterCodeArr.join("").toUpperCase();
        const numCode = numCodeArr.join("");
        const realCode = letterCode + " " + numCode;
        const log = JSON.parse(JSON.stringify(catalog));
        const poss: Course = log[letterCode][realCode];
        const found: Course = {
            code: poss.code,
            name: poss.name,
            descr: poss.descr,
            credits: poss.credits,
            preReq: poss.preReq,
            restrict: poss.restrict,
            breadth: poss.breadth,
            typ: poss.typ
        };
        return found;

        /*
        const codeArr = Array.from(id);
        const letterCodeArr = codeArr.filter(
            (str: string): boolean => isNaN(parseInt(str)) && str !== " "
        );
        const numCodeArr = codeArr.filter(
            (str: string): boolean => !isNaN(parseInt(str))
        );
        const letterCode = letterCodeArr.join("").toUpperCase();
        const numCode = numCodeArr.join("");
        const realCode = letterCode + numCode;
        const log = JSON.parse(JSON.stringify(catalog));
        const found: Course[] = log.filter((course: Course): boolean =>
            course.code.includes(realCode)
        );
        return found[0];
        */
    }
    //for Modal
    const close = () => setShow(false);
    const open = () => setShow(true);

    /**
     * Displays a button that when clicked has multiple textboxes/checkboxes that the user can use to make a new course
     */
    return (
        <>
            <div>
                <Button variant="success" onClick={open}>
                    Add New Course
                </Button>
            </div>
            <Modal show={show} onHide={close} backdrop="static" centered>
                <Modal.Header>
                    <Modal.Title>Add New Course</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formCode">
                        <Form.Label>Course Code:</Form.Label>
                        <Form.Control
                            value={code}
                            onChange={addCode}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formTitle">
                        <Form.Label>Course Title:</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={addTitle}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formCredits">
                        <Form.Label>Credits:</Form.Label>
                        <Form.Control
                            value={credits}
                            onChange={addCredits}
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formPreReq">
                        <Form.Label>PreReq To: </Form.Label>
                        <Form.Control
                            value={isPreReq}
                            onChange={addIsPreReq}
                        ></Form.Control>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="warning" onClick={close}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={makeCourse}>
                            Add New Course
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>
        </>
    );
}
