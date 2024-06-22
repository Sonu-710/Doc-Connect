import React from "react";
import { Link } from 'react-router-dom';

import './DoctorItem.css';

const DoctorItem = props => {
    return (
        <li className="dr-item">
            <div className="dr-item__content">
                <Link className="dr-item__link" to={`/${props.id}/appointments`}>
                    <div className="dr-item__image">
                        <img src={props.image} alt={props.name} />
                    </div>
                    <div className="dr-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.specialty}</h3>
                    </div>
                </Link>
            </div>
        </li>
    )
};

export default DoctorItem;