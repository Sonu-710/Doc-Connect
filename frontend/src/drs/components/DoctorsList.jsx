import React from "react";

import DoctorItem from './DoctorItem';
import './DoctorsList.css';


const DoctorsList = props => {
    if (props.items.length === 0) {
        return (<div className="center"><h1>No doctors found!</h1></div>)
    }

    return <ul className="drs-list">
        {props.items.map(dr => {
            return <DoctorItem key={dr.id} id={dr.id} image={dr.image} name={dr.name}
                qualification={dr.qualification} />;
        })}
    </ul>
}

export default DoctorsList;