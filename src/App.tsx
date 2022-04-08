import React from "react";
//import { Button } from "react-bootstrap";
import "./App.css";

import semesterPlan from "./data/semesterPlan.json";
import { Plan } from "./interfaces/plan";
import { PlanList } from "./components/PlanList";

import { MultipleSemesterTable } from "./components/multipleSemesterTable";

const PLANS = semesterPlan.map(
    (plan): Plan => ({
        ...plan
    })
);

function App(): JSX.Element {
    const plans = PLANS;
    //const [plans, setPlans] = useState<Plan[]>(PLANS);
    //const [showAddModal, setShowAddModal] = useState(false);

    /*
    function editPlan(id: string, newPlan: Plan) {
        setPlans(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
    }

    function deletePlan(id: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
    }*/

    /*
    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.id === newPlan.id
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
        }
    }*/

    //const handleCloseAddModal = () => setShowAddModal(false);
    //const handleShowAddModal = () => setShowAddModal(true);

    /** Add this later*/
    /*
<PlanList
                    plans={plans}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                ></PlanList>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Plan
                </Button>
*/

    return (
        <div className="App">
            <header className="App-header">Team 18 Page</header>
            <div>Abbey Walters</div>
            <div>Brielle Hina</div>
            <div>Mycah Detorres</div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <PlanList plans={plans}></PlanList>
            </div>
            <div>
                <p>Add Plan Modal goes here!</p>
            </div>
            <div>
                {/*Table with all courses in a plan, separated by semester*/}
                <MultipleSemesterTable plan={plans[0]}></MultipleSemesterTable>
            </div>
        </div>
    );
}

export default App;
