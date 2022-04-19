export interface Course {
    //ex: CISC220
    code: string;
    //ex: Data structures
    name: string;
    //course description
    descr: string;
    //credits
    credits: string;
    preReq: string;
    restrict: string;
    //what group is the course in
    breadth: string;
    //typically offered
    typ: string;
}
