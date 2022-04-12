import { sortAndDeduplicateDiagnostics } from "typescript";

export function Semester() {
    //const SEMESTERS
    //usestate: SEMESTERS, SHOWADDMODAL

    //editSemester
    function editSemester(id: string, newSemester: Semester) {
        setSemesters((semesters.map((semester: Semester): Semester => (semester.id === id ? newSemester : Semester))));
    }

    function deleteSemester(id: string){
        setSemesters(semesters.filter((semester: Semester): boolean => semester.id !== id))
    }

    function addSemester(newSemester: Semester){
        const existing = semester.find((semester: Semester): boolean => semester.id === newSemester.id);
        if(existing === undefined){
            setPlans([...semesters, newSemester]);
        }
    }
}
