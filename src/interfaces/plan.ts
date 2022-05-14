import { Semester } from "./Semester";

export interface Plan {
    /** A unique identifier for the Degree Plan */
    id: string;
    /** The human-friendly title of the Degree Plan */
    name: string;
    /** The List of Semesters */
    semesters: Semester[];
}
