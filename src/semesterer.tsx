//App: Plan 
//Semesterer: Semester
import React, { useState } from "react";
import semesterPlan from "./data/semesterPlan.json";
import { Semester } from "./interfaces/semester";
import { Plan } from "./interfaces/plan";
import { semesterList } from "./components/semesterList";

const PLANS = semesterPlan.map((plan): Plan => ({ ...plan }));

function Semesterer(): JSX.Element {
    const [semesters, setSemesters] = useState
}
