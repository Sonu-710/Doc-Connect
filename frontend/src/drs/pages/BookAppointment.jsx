import React from "react";
import AppointmentList from "../components/AppointmentList";

const dummy_appointments = [{
    id: 'a1',
    time: '12:00',
    date: '10.02.2024',
    location: 'Kolkata',
    slots: 20
}, {
    id: 'a2',
    time: '16:00',
    date: '14.12.2024',
    location: 'Kolkata',
    slots: 20
}]

const BookAppointment = () => {

    return (<AppointmentList items={dummy_appointments} />)
}

export default BookAppointment