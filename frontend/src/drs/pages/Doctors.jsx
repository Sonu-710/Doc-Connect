import React, { useEffect, useState } from "react";

import DoctorsList from "../components/DoctorsList";

const Doctors = () => {
    // const drs = [{ id: 'd1', name: 'Samir Hembrom', qualification: 'MBBS', image: 'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' },
    // { id: 'd2', name: 'Samir Hembrom', qualification: 'MBBS', image: 'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' },
    // { id: 'd3', name: 'Samir Hembrom', qualification: 'MBBS', image: 'https://images.unsplash.com/photo-1716724839791-d446b058c68d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D' }
    // ]

    const [isLoading, setIsLoading] = useState();
    const [loadedDr, setLoadedDr] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:3000/api/doctors');
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                setLoadedDr(responseData);

            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);

        }
        sendRequest();
    }, [])
    return (!isLoading && loadedDr && <DoctorsList items={loadedDr?.data} />)
}

export default Doctors;