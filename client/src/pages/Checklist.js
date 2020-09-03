import React from "react"
import { KitchenCard, BathCard, RoomCard } from "../components/ChecklistCards"

const Checklist = () => {
    return (
        <div className="row container app-content">
            <div className="card col l12 cardLists">
                <KitchenCard />
            </div>
            <div className="card col l12 cardLists">
                <BathCard />
            </div>
            <div className="card col l12 cardLists">
                <RoomCard />
            </div>
        </div>
    )
}

export default Checklist