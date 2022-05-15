import React, { useState } from "react";
import { Course } from "../interfaces/course";
import { Form } from "react-bootstrap";
import coreMajorRequirements from "../data/coreMajorRequirements.json";
import DLEReq from "../data/DLEReq.json";
import multiCulturalReq from "../data/multiCulturalReq.json";
import scienceRequirement from "../data/scienceRequirement.json";
import techElect from "../data/techElect.json";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

const startCourseList = [
    ...coreMajorRequirements,
    ...DLEReq,
    ...multiCulturalReq,
    ...scienceRequirement,
    ...techElect
];

export function Drag(): JSX.Element {
    const [choice, setChoice] = useState<string>();

    const [pool, setPool] = useState<Course[]>([]);

    // This function will be triggered when you start dragging
    const dragStartHandler = (
        event: React.DragEvent<HTMLDivElement>,
        data: Course
    ) => {
        event.dataTransfer.setData("text", JSON.stringify(data));
    };

    const dropHandlerPool = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        setPool([...pool, JSON.parse(data)]);
        //deleteCourseFromSem(JSON.parse(data));
    };

    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const dragEndHandler = (
        event: React.DragEvent<HTMLDivElement>,
        myCourseId: string
    ) => {
        setPool(
            pool.filter((course: Course): boolean => course.code !== myCourseId)
        );
    };

    function updateChoice(event: ChangeEvent) {
        setChoice(event.target.value);
        const myCourse = startCourseList.filter(
            (course: Course): boolean => event.target.value === course.code
        );
        setPool([...pool, ...myCourse]);
    }

    return (
        <div>
            <div
                style={{
                    backgroundColor: "pink",
                    height: "999px",
                    width: "340px"
                }}
                onDragOver={allowDrop}
                onDrop={(event) => dropHandlerPool(event)}
            >
                <h2>Pool: </h2>
                <Form.Group className="mb-3">
                    <Form.Select value={choice} onChange={updateChoice}>
                        {startCourseList.map((course: Course) => (
                            <option key={course.code}>{course.code}</option>
                        ))}
                        ;
                    </Form.Select>
                </Form.Group>
                {pool.map((course: Course) => (
                    <div
                        key={course.code}
                        className={course.code}
                        onDragStart={(event) => dragStartHandler(event, course)}
                        draggable={true}
                        onDragEnd={(event) =>
                            dragEndHandler(event, course.code)
                        }
                    >
                        <h3> {course.code + ": " + course.name} </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}
