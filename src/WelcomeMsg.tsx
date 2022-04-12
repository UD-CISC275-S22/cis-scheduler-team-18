import React, { useState } from "react";
import { Button } from "react-bootstrap";
export function Welcome(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    function flipVisibility(): void {
        setVisible(!visible);
    }
    function message(): JSX.Element {
        return (
            <div style={{ border: "1px solid blue" }}>
                Hello CS Student! Welcome to your scheduler! Here you can create
                multiple graduation plans to help you decide the best way for
                you to schedule your classes in future semesters. Click the Add
                Plan button below to begin.
            </div>
        );
    }
    return (
        <div>
            {visible && message()}
            <Button onClick={flipVisibility}>
                {visible ? "Hide" : "Show Instructions"}
            </Button>
        </div>
    );
}
