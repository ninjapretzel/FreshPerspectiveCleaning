import React from "react"
import { KitchenCard, BathCard, RoomCard } from "../components/ChecklistCards"

const Checklist = () => {
    return (
        <div className="row">
            <div className="card col l8 offset-l2 cardLists">
                <KitchenCard />
            </div>
            <div className="card col l8 offset-l2 cardLists">
                <BathCard />
            </div>
            <div className="card col l8 offset-l2 cardLists">
                <RoomCard />
            </div>
        </div>
    )
}

export default Checklist