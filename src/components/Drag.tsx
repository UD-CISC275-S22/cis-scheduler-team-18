//Yeah this works

import React, { useState } from "react";
import { Course } from "../interfaces/course";
import coreMajorRequirements from "../data/coreMajorRequirements.json";
import { Col, Row } from "react-bootstrap";
import scienceRequirement from "../data/scienceRequirement.json";

let startLeft = coreMajorRequirements.map((course): Course => ({ ...course }));
let startRight = scienceRequirement.map((course): Course => ({ ...course }));

const saveDataKey = "MY-PAGE-DATA";
const previousData = localStorage.getItem(saveDataKey);
if (previousData !== null) {
    startLeft = JSON.parse(previousData);
}

if (previousData !== null) {
    startRight = JSON.parse(previousData);
}

export function Drag(): JSX.Element {
    // The content of the target box
    const [left, setLeft] = useState<Course[]>(startLeft);
    const [right, setRight] = useState<Course[]>(startRight);

    const [pool, setPool] = useState<Course[]>([]);

    // This function will be triggered when you start dragging
    const dragStartHandler = (
        event: React.DragEvent<HTMLDivElement>,
        data: Course
    ) => {
        event.dataTransfer.setData("text", JSON.stringify(data));
    };

    function deleteLeft(newCourse: Course) {
        //setLeft(left.filter((course: Course): boolean => course !== newCourse));
        //setLeft([...left, left[4]]);
        setLeft(
            left.filter(
                (course: Course): boolean => course.name !== newCourse.name
            )
        );
    }

    function deleteRight(newCourse: Course) {
        //setRight(right.filter((course: Course): boolean => course.code !== id));
        setRight(
            right.filter(
                (course: Course): boolean => course.name !== newCourse.name
            )
        );
    }

    // This function will be triggered when dropping

    const dropHandler = (
        event: React.DragEvent<HTMLDivElement>,
        newCourse: Course
    ) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const existing = left.find(
            (course: Course): boolean => course.name === newCourse.name
        );
        if (existing === undefined) {
            setRight([...right, JSON.parse(data)]);
            deleteLeft(JSON.parse(data));
        }
    };

    const dropHandler2 = (
        event: React.DragEvent<HTMLDivElement>,
        newCourse: Course
    ) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const existing = right.find(
            (course: Course): boolean => course.name === newCourse.name
        );
        if (existing === undefined) {
            setLeft([...left, JSON.parse(data)]);
            deleteRight(JSON.parse(data));
        }
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

    return (
        <div className="container">
            <Row>
                <div
                    style={{
                        backgroundColor: "pink",
                        display: "inline-block"
                    }}
                    onDragOver={allowDrop}
                    onDrop={(event) => dropHandlerPool(event)}
                >
                    {pool.map((course: Course) => (
                        <div
                            key={course.code}
                            className={course.code}
                            onDragStart={(event) =>
                                dragStartHandler(event, course)
                            }
                            draggable={true}
                        >
                            <h2> {course.name} </h2>
                        </div>
                    ))}
                </div>
            </Row>
            <Row>
                <Col>
                    <div
                        key="theStart"
                        className="box4"
                        style={{
                            backgroundColor: "green",
                            display: "inline-block"
                        }}
                    >
                        {left.map((course: Course) => (
                            <div
                                key={course.code}
                                className={course.code}
                                onDragStart={(event) =>
                                    dragStartHandler(event, course)
                                }
                                draggable={true}
                                onDragOver={allowDrop}
                                onDrop={(event) => dropHandler2(event, course)}
                            >
                                <h2>{course.name}</h2>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col>
                    <h2>Drop Something Here</h2>
                    <hr></hr>
                    <div
                        key="hi"
                        className="box3"
                        style={{
                            backgroundColor: "red",
                            display: "inline-block"
                        }}
                    >
                        {right.map((course: Course) => (
                            <div
                                key={course.code}
                                className={course.code}
                                onDragStart={(event) =>
                                    dragStartHandler(event, course)
                                }
                                draggable={true}
                                onDragOver={allowDrop}
                                onDrop={(event) => dropHandler(event, course)}
                            >
                                <h2>{course.name}</h2>
                            </div>
                        ))}
                    </div>
                    <hr></hr>
                </Col>
            </Row>
        </div>
    );
}

//This works ish -->>>>>>>>>>>>>>>>>>>>

/*
const COURSES = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh"
];

const startContent = ["a", "b", "c", "d", "e", "f", "g"];

export function Drag(): JSX.Element {
    // The content of the target box
    const [content, setContent] = useState<string[]>(startContent);
    const [allCourses, setAllCourses] = useState<string[]>(COURSES);

    // This function will be triggered when you start dragging
    const dragStartHandler = (
        event: React.DragEvent<HTMLDivElement>,
        data: string
    ) => {
        event.dataTransfer.setData("text", data);
    };

    function deleteTheCourse(courseName: string) {
        setAllCourses(
            allCourses.filter(
                (course: string): boolean => course !== courseName
            )
        );
    }

    function deleteTheCourse2(courseName: string) {
        setContent(
            content.filter((thing: string): boolean => thing !== courseName)
        );
    }

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
            deleteTheCourse(newCourseName);
        }
    };

    const dropHandler2 = (
        event: React.DragEvent<HTMLDivElement>,
        newCourseName: string
    ) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        const existing = allCourses.find(
            (courseName: string): boolean => courseName === newCourseName
        );
        if (existing === undefined) {
            setAllCourses([...allCourses, data]);
            deleteTheCourse2(newCourseName);
        }
    };

    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <Row>
                <Col>
                    <div
                        key="theStart"
                        className="box4"
                        onDragOver={allowDrop}
                        onDrop={(event) => dropHandler2(event, "hey")}
                    >
                        {allCourses.map((course: string) => (
                            <div
                                key={course}
                                className={course}
                                onDragStart={(event) =>
                                    dragStartHandler(event, course)
                                }
                                draggable={true}
                            >
                                <h2>{course}</h2>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col>
                    <h2>Drop Something Here</h2>
                    <hr></hr>
                    <div
                        key="hi"
                        className="box3"
                        onDragOver={allowDrop}
                        onDrop={(event) => dropHandler(event, "hello")}
                    >
                        {content.map((thing: string) => (
                            <div
                                key={thing}
                                className={thing}
                                onDragStart={(event) =>
                                    dragStartHandler(event, thing)
                                }
                                draggable={true}
                            >
                                <h2>{thing}</h2>
                            </div>
                        ))}
                    </div>
                    <hr></hr>
                </Col>
            </Row>
        </div>
    );
}
*/

/*
import React, { useState } from "react";

import { Course } from "../interfaces/course";
import groupARequirements from "../data/groupARequirements.json";

const COURSES = groupARequirements.map(
    (course): Course => ({
        ...course
    })
);

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
    
    function dropHandler(newCourse: Course, event: React.DragEvent<HTMLDivElement>) {
        const existing = content.find(
            (course: Course): boolean => course.id === newCourse.id
        );
        if (existing === undefined) {
            setContent([...content, newCourse]);
        }
    }

    
    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <div>
                <div className="control">
                    <div>Select your skills</div>
                    <ul id="listbox1"></ul>
                </div>
                <div className="control">
                    <div>Selected skills</div>
                    <ul id="listbox2"></ul>
                </div>
            </div>
            <Row>
                <Col>
                    <div>
                        {allCourses.map((course: Course) => (
                            <div
                                key={course.id}
                                className={course.id}
                                onDragStart={(event) =>
                                    dragStartHandler(event, course.courseName)
                                }
                                draggable={true}
                            >
                                <h2>{course.courseName}</h2>
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














export function Drag(): JSX.Element {
    const drop = (event: { preventDefault: () => void; dataTransfer: { getData: (arg0: string) => any; }; target: { appendChild: (arg0: HTMLElement | null) => void; }; })=>{
        event.preventDefault();
        const card_id = event.dataTransfer.getData("card_id");

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        event.target.appendChild(card);
    }

    const dragOver = event => {
        event.preventDefault();
    }

};
    return(
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
            Hey Hi iiiiiiiiiiii {props.children}
        </div>
    );
}


import {
    DragDropContext,
    Draggable,
    Droppable,
    DropResult
} from "react-beautiful-dnd";
import { propTypes } from "react-bootstrap/esm/Image";

const listItems = [
    {
        id: "1",
        name: "Study Spanish"
    },
    {
        id: "2",
        name: "Workout"
    },
    {
        id: "3",
        name: "Film Youtube"
    },
    {
        id: "4",
        name: "Grocery Shop"
    }
];

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    padding: 10,
    margin: "0 50px 15px 50px",
    background: isDragging ? "#4a2975" : "white",
    color: isDragging ? "white" : "black",
    border: "1px solid black",
    fontSize: "20px",
    borderRadius: "5px",
    ...draggableStyle
});

export function Drag(): JSX.Element {
    const [todo, setTodo] = useState(listItems);
    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;
        if (!destination) return;
        const items = Array.from(todo);
        const [newOrder] = items.splice(source.index, 1);
        items.splice(destination.index, 0, newOrder);
        setTodo(items);
    };
    return (
        <div className="DragNDrop">
            <h1>Drag and Drop</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="todo">
                    {(provided: {
                        droppableProps: JSX.IntrinsicAttributes &
                            React.ClassAttributes<HTMLDivElement> &
                            React.HTMLAttributes<HTMLDivElement>;
                        innerRef: React.LegacyRef<HTMLDivElement> | undefined;
                    }) => (
                        <div
                            className="todo"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {todo.map(({ id, name }, index) => {
                                return (
                                    <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                    >
                                        {(
                                            provided: {
                                                innerRef:
                                                    | React.LegacyRef<HTMLDivElement>
                                                    | undefined;
                                                draggableProps: JSX.IntrinsicAttributes &
                                                    React.ClassAttributes<HTMLDivElement> &
                                                    React.HTMLAttributes<HTMLDivElement>;
                                                dragHandleProps: JSX.IntrinsicAttributes &
                                                    React.ClassAttributes<HTMLDivElement> &
                                                    React.HTMLAttributes<HTMLDivElement>;
                                            },
                                            snapshot: { isDragging: boolean }
                                        ) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps
                                                        .style
                                                )}
                                            >
                                                {name}
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
}
*/

/*
import {useListData} from '@react-stately/data';
import { useListState, ListProps, ListState } from "@react-stately/list";
import { Item } from "@react-stately/collections";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { useListBox, useOption } from "@react-aria/listbox";
import { Node } from "@react-types/shared";

interface Animal {
    id: number;
    name: string;
}

export default function App() {
    const [animals, setAnimals] = useState([
        { id: 1, name: "Aardvark" },
        { id: 2, name: "Kangaroo" },
        { id: 3, name: "Snake" }
    ]);

    return (
        <div>
            <ListBox label="Animals" items={animals}>
                {(item: { name: Item }): Item => <Item>{item.name}</Item>}
            </ListBox>
            <button
                onClick={() =>
                    setAnimals((prevAnimals) => {
                        const newAnimals = [
                            ...prevAnimals,
                            {
                                id: prevAnimals.length + 1,
                                name: `Anothermal${prevAnimals.length}`
                            }
                        ];

                        return newAnimals;
                    })
                }
            >
                click mij
            </button>
        </div>
    );
}

interface ListBoxProps {
    label: string;
}

function ListBox(props: ListBoxProps & ListProps<Animal>) {
    // Create state based on the incoming props
    const state = useListState(props);

    // Get props for the listbox element
    const ref = React.useRef(null);
    const { listBoxProps, labelProps } = useListBox(props, state, ref);

    return (
        <>
            <div {...labelProps}>{props.label}</div>
            <ul
                {...listBoxProps}
                ref={ref}
                style={{
                    padding: 0,
                    margin: "5px 0",
                    listStyle: "none",
                    border: "1px solid gray",
                    maxWidth: 250
                }}
            >
                {[...state.collection].map((item) => (
                    <Option key={item.key} item={item} state={state} />
                ))}
            </ul>
        </>
    );
}

interface OptionProps {
    item: Node<Animal>;
    state: ListState<Animal>;
}

function Option({ item, state }: OptionProps) {
    // Get props for the option element
    const ref = React.useRef(null);
    const isDisabled = state.disabledKeys.has(item.key);
    const isSelected = state.selectionManager.isSelected(item.key);
    const { optionProps } = useOption(
        {
            key: item.key,
            isDisabled,
            isSelected
        },
        state,
        ref
    );

    // Determine whether we should show a keyboard
    // focus ring for accessibility
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
        <li
            {...mergeProps(optionProps, focusProps)}
            ref={ref}
            style={{
                background: isSelected ? "blueviolet" : "transparent",
                color: isSelected ? "white" : undefined,
                padding: "2px 5px",
                outline: isFocusVisible ? "2px solid orange" : "none"
            }}
        >
            {item.rendered}
        </li>
    );
}


function useListState(props: any) {
    throw new Error("Function not implemented.");
}
*/

/*
import React, { useState } from "react";
import { Course } from "../interfaces/course";
import groupARequirements from "../data/groupARequirements.json";
import { Col, Row } from "react-bootstrap";

const COURSES = groupARequirements.map(
    (course): Course => ({
        ...course
    })
);
*/

/*
const PHOTO_URL =
    "https://www.kindacode.com/wp-content/uploads/2021/06/cute-dog.jpeg";
*/

/*
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
    */

/*
    function dropHandler(newCourse: Course, event: React.DragEvent<HTMLDivElement>) {
        const existing = content.find(
            (course: Course): boolean => course.id === newCourse.id
        );
        if (existing === undefined) {
            setContent([...content, newCourse]);
        }
    }*/

/*
    // This makes the third box become droppable
    const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <div className="container">
            <div>
                <div className="control">
                    <div>Select your skills</div>
                    <ul id="listbox1"></ul>
                </div>
                <div className="control">
                    <div>Selected skills</div>
                    <ul id="listbox2"></ul>
                </div>
            </div>
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
*/

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
