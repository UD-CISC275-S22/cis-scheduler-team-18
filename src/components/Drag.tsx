import React, { useState } from "react";
import { Course } from "../interfaces/course";
import groupARequirements from "../data/groupARequirements.json";
import { Col, Row } from "react-bootstrap";

const COURSES = groupARequirements.map(
    (course): Course => ({
        ...course
    })
);

/*
const PHOTO_URL =
    "https://www.kindacode.com/wp-content/uploads/2021/06/cute-dog.jpeg";
*/

export function Drag(): JSX.Element {
    // The content of the target box
    const [content, setContent] = useState<string[]>([]);

    const [allCourses] = useState<Course[]>(COURSES);

    // This function will be triggered when you start dragging
    const dragStartHandler = (
        event: React.DragEvent<HTMLDivElement>,
        data: string
    ) => {
        event.dataTransfer.setData("text", data);
    };

    // This function will be triggered when dropping

    const dropHandler = (
        event: React.DragEvent<HTMLDivElement>,
        newCourseName: string
    ) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const existing = content.find(
            (courseName: string): boolean => courseName === newCourseName
        );
        if (existing === undefined) {
            setContent([...content, data]);
        }
    };

    /*
    function dropHandler(newCourse: Course, event: React.DragEvent<HTMLDivElement>) {
        const existing = content.find(
            (course: Course): boolean => course.id === newCourse.id
        );
        if (existing === undefined) {
            setContent([...content, newCourse]);
        }
    }*/

    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <Row>
                <Col>
                    <div>
                        {allCourses.map((course: Course) => (
                            <div
                                key={course.code}
                                className={course.code}
                                onDragStart={(event) =>
                                    dragStartHandler(event, course.name)
                                }
                                draggable={true}
                            >
                                <h2>{course.name}</h2>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <h2>Drop Something Here</h2>
            <div
                key="hi"
                className="box3"
                onDragOver={allowDrop}
                onDrop={(event) => dropHandler(event, "hello")}
            >
                <hr></hr>
                <h2>{content}</h2>
                <hr></hr>
            </div>
        </div>
    );
}

/*
export function Drag(): JSX.Element {
    const [dragOver, setDragOver] = React.useState(false);
    const handleDragOverStart = () => setDragOver(true);
    const handleDragOverEnd = () => setDragOver(false);
    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData("text", event.currentTarget.id);
    };

    const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData("text");
        console.log(`Somebody dropped an element with id: ${id}`);
        setDragOver(false);
    };

    return (
        <div>
            <div id="d1" draggable="true" onDragStart={handleDragStart}>
                {" "}
                Drag me{" "}
            </div>
            <div id="d2" draggable="true" onDragStart={handleDragStart}>
                {" "}
                ... Or me!{" "}
            </div>
            <div
                onDragOver={enableDropping}
                onDrop={handleDrop}
                onDragEnter={handleDragOverStart}
                onDragLeave={handleDragOverEnd}
                style={
                    dragOver ? { fontWeight: "bold", background: "red" } : {}
                }
            >
                Drop Zone
            </div>
        </div>
    );
}
*/
