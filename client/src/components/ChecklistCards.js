import React from "react"
// import { Card } from "react-materialize"
// import "../css/CheckListCards.css"

export const KitchenCard = () => {
    return (
        <div>
            <h5>KITCHEN</h5>
            <div className="row">
                <ul className="col l6 s12">
                    <li>Tidy up</li>
                    <li>Cabinets front exterior dusted/wiped down</li>
                    <li>Microwave cleaned inside + out</li>
                    <li>Stove cleaned</li>
                    <li>Countertops + backsplash wiped down</li>
                    <li>Appliances exterior wiped down/shined</li>
                    <li>Switch plates wiped down</li>
                </ul>
                <ul className="col l6 s12">
                    <li>Sink scrubbed + disinfected, faucet shined</li>
                    <li>Tables + chairs wiped down</li>
                    <li>Glass door cleaned</li>
                    <li>Trash can emptied/trash bag replaced</li>
                    <li>Blinds + baseboards alternatively dusted</li>
                    <li>Floors vacuumed/swept + mopped</li>
                </ul>
            </div>
        </div>
    )
}

export const BathCard = () => {
    return (
        <div>
            <h5>BATHROOMS</h5>
            <div className="row">
                <ul className="col l6 s12">
                    <li>Tidy up</li>
                    <li>Bath rugs removed + vacuumed</li>
                    <li>Shower wall + tub scrubbed, disinfected + rinsed</li>
                    <li>Shower door glass, frame + track cleaned</li>
                    <li>Countertops + sidesplash wiped down</li>
                    <li>Mirrors cleaned</li>
                    <li>Personal care products, soap dish, etc. cleaned</li>
                    <li>Sink scrubbed + disinfected, faucet shined</li>
                </ul>
                <ul className="col l6 s12">
                    <li>Switch plates wiped down</li>
                    <li>Cabinets exterior wiped down</li>
                    <li>Towels folded + hung</li>
                    <li>Chrome fixtures shined</li>
                    <li>Toilet scrubbed + disinfected inside + out</li>
                    <li>Trash can emptied/trash bag replaced</li>
                    <li>Baseboards vacuumed/wiped down</li>
                    <li>Floors vacuumed + mopped</li>
                    <li>Blinds maintained if any</li>
                </ul>
            </div>
        </div>
    )
}

export const RoomCard = () => {
    return (
        <div>
            <h5>BEDROOMS, OFFICES, OTHER AREAS + LAUNDRY ROOM</h5>
            <div className="row">
                <ul className="col l6 s12">
                    <li>Tidy up</li>
                    <li>Standing objects dusted</li>
                    <li>Furniture dusted (horizontal + vertical surfaces)</li>
                    <li>Windowsills dusted</li>
                    <li>Mirrors cleaned</li>
                    <li>Glass door cleaned</li>
                    <li>Stair railings dusted/handrail wiped down</li>
                </ul>
                <ul className="col l6 s12">
                    <li>Stairs vacuumed/wiped down</li>
                    <li>Cabinets front exterior dusted/wiped down</li>
                    <li>Washer + dryer exterior dusted/wiped down</li>
                    <li>Trash can emptied/trash bag replaced</li>
                    <li>Blinds + baseboards alternatively dusted</li>
                    <li>Floors vacuumed/swept + mopped (if applicable)</li>
                </ul>
            </div>
        </div>
    )
}