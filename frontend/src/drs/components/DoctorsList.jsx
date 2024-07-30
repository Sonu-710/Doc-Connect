import React, { useState } from "react";

import DoctorItem from './DoctorItem';
import './DoctorsList.css';


const DoctorsList = props => {
    const [search, setSearch] = useState('');
    if (props.items.length === 0) {
        return (<div className="center"><h1>No doctors found!</h1></div>)
    }

    return (<>
        <h1 className="title">Search based on specialty</h1>
        <div className="search-bar">
            <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search specialty" />
        </div>

        <ul className="drs-list">
            {props.items.filter(dr => { return search.toLowerCase() === '' ? dr : dr.specialty.toLowerCase().includes(search); }).map(dr => {
                return <DoctorItem key={dr._id} id={dr._id} image={'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'} name={dr.name}
                    specialty={dr.specialty} />;
            })}
        </ul></>)
}

export default DoctorsList;