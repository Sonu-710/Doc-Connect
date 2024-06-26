import React from "react";

import Button from "../../shared/components/UIElements/Button";
import './AppointmentItem.css';


const AppointmentItem = props => {
    return <li className="appointment-item">
        <div className="appointment-item__info">
            <h2>Slots Available: {props.slots}</h2>
            <h3>{props.time}</h3>
            <h3>{props.date}</h3>
            <h3>{props.location}</h3>
        </div>
        <div className="appointment-item__actions">
            <Button>Book</Button>
        </div>
    </li>
}

export default AppointmentItem;