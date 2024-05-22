import React from 'react'
import Dashboard from "../MainPage/DashboardComp/Dashboard.jsx"
import Inventory from "../MainPage/InventoryComp/Inventory.jsx"
import WorkOrder from "../MainPage/WorkOrderComp/WorkOrder.jsx"

function CenterComp({activeIndex}){
    const activeComponents = {
        0: Dashboard,
        1: Inventory,
        2: WorkOrder,
    };
    
    const SelectedComponent = activeComponents[activeIndex];

    return <SelectedComponent/>;
}

export default CenterComp;