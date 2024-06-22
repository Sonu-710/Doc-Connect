import React from "react";

import AppointmentItem from './AppointmentItem';
import './AppointmentList.css';

const AppointmentList = props => {
    if (props.items.length === 0) {
        return <h2>No appointment</h2>
    }
    return (
        <ul className="appointment-list">
            {props.items.map(appointment => <AppointmentItem key={appointment.id} id={appointment.id} time={appointment.time} date={appointment.data} location={appointment.location} slots={appointment.slots} />)}
        </ul>
    )
};

export default AppointmentList;