import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.css';

const Backdrop = props => {

  return ReactDOM.createPortal(
    <p>This child is placed in the document body.</p>,
    document.getElementById("backdrop-hook")
  )
};

export default Backdrop;
