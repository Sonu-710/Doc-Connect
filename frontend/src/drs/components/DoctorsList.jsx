import React from "react";

import DoctorItem from './DoctorItem';
import './DoctorsList.css';


const DoctorsList = props => {
    if (props.items.length === 0) {
        return (<div className="center"><h1>No doctors found!</h1></div>)
    }

    return <ul className="drs-list">
        {props.items.map(dr => {
            return <DoctorItem key={dr._id} id={dr._id} image={'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'} name={dr.name}
                specialty={dr.specialty} />;
        })}
    </ul>
}

export default DoctorsList;