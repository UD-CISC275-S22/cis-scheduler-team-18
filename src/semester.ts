/** A representation of a Semester for a schedule */
export interface Semester {
    //a representation of the specific semester
    id: string;
    //a string representing the season this semester is taking place
    season: string;
    //a number for what year thi ssemster takes place during
    year: number;
    //an array of the courses in this semester
    courses: Course[];
}
