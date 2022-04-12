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
    //will be a string indicating what the specific course is a prereq to
    preReqTo: string;
    //will be a boolean indicating if there's a prereq to this specific course
    preReqRequired: boolean;
    //will indicate what course is needed as a prereq to this course
    requiredPreReq: string;
    //will indicate if the specific course is an option (you can take this one or another one)
    option: boolean;
    //will indicate what the other option is if you don't take this course
    optionTo: string;
}
