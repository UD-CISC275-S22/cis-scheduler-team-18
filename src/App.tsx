import React, { useState } from "react";
import "./App.css";

import { Plan } from "./interfaces/plan";
import { PlanList } from "./components/PlanList";
import { Welcome } from "./WelcomeMsg";
import { Button } from "react-bootstrap";
import { AddPlanModal } from "./components/AddPlanModal";

//load between pages
const PLANS: Plan[] | (() => Plan[]) = [];
let loadedData = PLANS;
const saveDataKey = "team-18-scheduler-data!";
const previousData = localStorage.getItem(saveDataKey);
if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

function App(): JSX.Element {
    const [plans, setPlans] = useState<Plan[]>(PLANS);
    const [showAddModal, setShowAddModal] = useState(false);
    const [data, setData] = useState<Plan[]>(loadedData);

    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(data));
    }

    function editPlan(id: string, newPlan: Plan) {
        setPlans(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
        setData(
            plans.map((plan: Plan): Plan => (plan.id === id ? newPlan : plan))
        );
    }

    function deletePlan(id: string) {
        setPlans(plans.filter((plan: Plan): boolean => plan.id !== id));
        setData(plans.filter((plan: Plan): boolean => plan.id !== id));
    }

    function addPlan(newPlan: Plan) {
        const existing = plans.find(
            (plan: Plan): boolean => plan.id === newPlan.id
        );
        if (existing === undefined) {
            setPlans([...plans, newPlan]);
            setData([...data, newPlan]);
        }
    }

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    return (
        <div className="App">
            <header className="App-header">
                CISC275: Team 18 - Mycah Detorres, Brielle Hina, Abigail Walters
            </header>
            <div>
                <Welcome></Welcome>
            </div>
            <div>
                <Button className="m-1" onClick={saveData}>
                    Save All Changes
                </Button>
            </div>
            <div>
                <PlanList
                    setPlans={setPlans}
                    plans={data}
                    editPlan={editPlan}
                    deletePlan={deletePlan}
                    setData={setData}
                ></PlanList>
            </div>
            <div>
                <Button
                    variant="success"
                    className="m-4"
                    onClick={handleShowAddModal}
                >
                    Add New Plan
                </Button>
                <AddPlanModal
                    show={showAddModal}
                    handleClose={handleCloseAddModal}
                    addPlan={addPlan}
                ></AddPlanModal>
            </div>
        </div>
    );
}

export default App;
