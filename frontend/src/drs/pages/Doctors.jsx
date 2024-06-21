import React from "react";

import DoctorsList from "../components/DoctorsList";

const Doctors = () => {
    const drs = [{ id: 'd1', name: 'Samir Hembrom', qualification: 'MBBS', image: 'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'd2', name: 'Samir Hembrom', qualification: 'MBBS', image: 'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' },
    { id: 'd3', name: 'Samir Hembrom', qualification: 'MBBS', image: 'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' }
    ]
    return <DoctorsList items={drs} />
}

export default Doctors;