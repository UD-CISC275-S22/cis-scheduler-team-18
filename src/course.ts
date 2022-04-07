export interface Course {
    id: string;
    //this is like the whole course
    //ex: "CISC275" is what would go in course Id (prefix + number)
    courseName: string;
    //this is the title
    //ex: "Intro to Software Engineering"
    courseTitle: string;
    credits: number;
    //will indicate whether this is a required course
    required: boolean;
    //will indicate whether this is a prereq to another course
    preReq: boolean;
}
